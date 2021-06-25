const d3 = require("d3");

// parse the date / time
const parseTime = d3.timeParse("%Y-%m-%d");

export const createChart = (data1, data2, chartAreaClassName) => {
    // set the dimensions and margins of the graph
    const margin = {top: 20, right: 20, bottom: 100, left: 50},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    // set the ranges
    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    // define the first line
    const valueline1 = d3.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.value); });

    // define the second line
    const valueline2 = d3.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.value); });

    // append the svg object to the chart area
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    const svg = d3.select(chartAreaClassName).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g").attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

        // format the data
    const fData1 = formatData(data1)
    const fData2 = formatData(data2)

        // Scale the range of the data
        x.domain(d3.extent(fData1, function(d) { return d.date; }));
        y.domain([0, d3.max(fData1, function(d) { return d.value; })]);

        // Add the valueline path.
    addValueLine(fData1, valueline1, svg, "line1")
    addValueLine(fData2, valueline2, svg, "line2")

    // Define the div for the tooltip
    const div = d3.select(chartAreaClassName).append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // Add the scatterplot
    addScatterPlot(fData1, svg, "dot1", div, x, y)
    addScatterPlot(fData2, svg, "dot2", div, x, y)

        // Add the X Axis
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).ticks(6));

        // Add the Y Axis
        svg.append("g")
            .call(d3.axisLeft(y));

    // Handmade legend
    svg.append("circle").attr("cx",0).attr("cy",height + 50).attr("r", 6).attr("class", "dot1")
    svg.append("circle").attr("cx",0).attr("cy",height + 80).attr("r", 6).attr("class", "dot2")
    svg.append("text").attr("x", 20).attr("y", height + 55).text("Value 1").style("font-size", "15px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 20).attr("y", height + 85).text("Value 2").style("font-size", "15px").attr("alignment-baseline","middle")
}

const formatData = (data) => {
    let formattedData = JSON.parse(JSON.stringify(data))
    formattedData.forEach(function (d) {
        d.date = parseTime(d.date);
        d.value = +d.value;
    });
    return formattedData;
}

const addValueLine = (data, valueline, svg, className) => {
    svg.append("path")
        .data([data])
        .attr("class", className)
        .attr("d", valueline);
}

const addScatterPlot = (data, svg, className, tooltipDiv, x, y) => {
    svg.selectAll("dot")
        .data(data)
        .enter().append("circle")
        .attr("r", 5)
        .attr("class", className)
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return y(d.value); })
        .on("mouseover", function(event, d) {
            tooltipDiv.transition()
                .duration(200)
                .style("opacity", .9);
            tooltipDiv.html("Episode " + d.episode + "<br/>" + d.date.toLocaleDateString() + "<br/>"  + d.value)
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function(d) {
            tooltipDiv.transition()
                .duration(500)
                .style("opacity", 0);
        });
}