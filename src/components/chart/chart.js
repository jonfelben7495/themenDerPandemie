const d3 = require("d3");

// parse the date / time
const parseTime = d3.timeParse("%Y-%m-%d");

export const createChart = (data1, data2, chartAreaClassName, ldaTopicNr, semanticTopic, chartObj) => {
    // set the dimensions and margins of the graph
    const margin = {top: 20, right: 20, bottom: 100, left: 50},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    // set the ranges
    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    // define the first line
    let valueline1;
    if(ldaTopicNr !== null){
        valueline1 = d3.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d[ldaTopicNr]); });
    }


    // define the second line
    let valueline2;
    if(semanticTopic !== null){
        valueline2 = d3.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d[semanticTopic]); });
    }

    // append the svg object to the chart area
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    const svg = d3.select(chartAreaClassName).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g").attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

        // format the data
    let fData1 = [], fData2 = [];
    if (ldaTopicNr !== null) {
        fData1 = formatData(data1, ldaTopicNr)
    }
    if (semanticTopic !== null) {
        fData2 = formatData(data2, semanticTopic)
    }
    const allData = fData1.concat(fData2)

        // Scale the range of the data
        x.domain(d3.extent(allData, function(d) { return d.date; }));
        y.domain([0, d3.max(allData, function(d) { return d[ldaTopicNr] === undefined ? d[semanticTopic] : d[ldaTopicNr]; })]);

        // Add the valueline path.
    if (ldaTopicNr !== null) {
        addValueLine(fData1, valueline1, svg, "line1", ldaTopicNr)
    }
    if (semanticTopic !== null) {
        addValueLine(fData2, valueline2, svg, "line2", semanticTopic)
    }

    // Define the div for the tooltip
    const div = d3.select(chartAreaClassName).append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // Add the scatterplot
    if (ldaTopicNr !== null) {
        addScatterPlot(fData1, svg, "dot1", div, x, y, ldaTopicNr)
    }
    if (semanticTopic !== null) {
        addScatterPlot(fData2, svg, "dot2", div, x, y, semanticTopic)
    }

        // Add the X Axis
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).ticks(6));

        // Add the Y Axis
        svg.append("g")
            .call(d3.axisLeft(y));

    // Handmade legend
    if(chartObj.ldaTopic !== null) {
        svg.append("circle").attr("cx", 0).attr("cy", height + 50).attr("r", 6).attr("class", "dot1")
        svg.append("text").attr("x", 20).attr("y", height + 55).text("LDA Topic '" + chartObj.ldaTopic + "'").style("font-size", "15px").attr("alignment-baseline", "middle")
    }

    if(chartObj.semanticTopic !== null) {
        svg.append("circle").attr("cx",0).attr("cy",height + 80).attr("r", 6).attr("class", "dot2")
        svg.append("text").attr("x", 20).attr("y", height + 85).text("Wortfeld '" + chartObj.semanticTopic + "'").style("font-size", "15px").attr("alignment-baseline","middle")
    }

}

const formatData = (data, topic) => {
    let formattedData = JSON.parse(JSON.stringify(data))
    let array = []
    for (const [key, value] of Object.entries(formattedData)) {
        value.date = parseTime(value.date);
        if (value[topic] === undefined){
            value[topic] = 0;
        }
        value[topic] = +value[topic];
        value.episode = key;
        array.push(value)
    }
    return array;
}

const addValueLine = (data, valueline, svg, className) => {
    svg.append("path")
        .data([data])
        .attr("class", className)
        .attr("d", valueline);
}

const addScatterPlot = (data, svg, className, tooltipDiv, x, y, topic) => {
    svg.selectAll("dot")
        .data(data)
        .enter().append("circle")
        .attr("r", 5)
        .attr("class", className)
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return y(d[topic]); })
        .on("mouseover", function(event, d) {
            tooltipDiv.transition()
                .duration(200)
                .style("opacity", .9);
            tooltipDiv.html("Episode " + d.episode + "<br/>" + d.date.toLocaleDateString() + "<br/>"  + d[topic].toFixed(3))
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function(d) {
            tooltipDiv.transition()
                .duration(500)
                .style("opacity", 0);
        });
}