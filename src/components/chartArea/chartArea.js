import {createChart} from "../chart/chart";

export const createChartArea = (chartObj, data1, data2, ldaTopicNr, semanticTopic, data1_f50 = null, data2_f50 = null, target = null) => {
    console.log(data2_f50)
    const chartArea = document.createElement("div")
    chartArea.classList.add(chartObj.className, "chartArea")

    const chartHeadline = document.createElement("h2")
    chartHeadline.classList.add(chartObj.className + "_headline", "chartArea_headline")
    if (chartObj.semanticTopic === null) {
        chartHeadline.innerHTML = chartObj.ldaTopic
    } else if (chartObj.ldaTopic === null) {
        chartHeadline.innerHTML = chartObj.semanticTopic
    } else {
        chartHeadline.innerHTML = chartObj.semanticTopic + " / " + chartObj.ldaTopic
    }

    const chartIntro = document.createElement("p")
    chartIntro.classList.add(chartObj.className + "_intro", "chartArea_intro")
    chartIntro.innerHTML = chartObj.intro;

    const chartWortfeld = document.createElement("p");
    if (chartObj.wortfeld !== null){
        chartWortfeld.classList.add(chartObj.className + "_wf", "chartArea_wf")
        chartWortfeld.innerHTML = "<b>Wortfeld:</b> " + chartObj.wortfeld.join(', ');
    }

    const chartTopicModeling = document.createElement("p");
    if (chartObj.topicModeling !== null){
        chartTopicModeling.classList.add(chartObj.className + "_tm", "chartArea_tm")
        chartTopicModeling.innerHTML = "<b>Topic modeling:</b> " + chartObj.topicModeling.join(', ');
    }

    const chartCorrelation = document.createElement("p");
    if (chartObj.correlation !== null){
        chartCorrelation.classList.add(chartObj.className + "_cor", "chartArea_cor")
        chartCorrelation.innerHTML = "<b>Korrelation:</b> " + chartObj.correlation.toFixed(3);
    }

    chartArea.appendChild(chartHeadline)
    chartArea.appendChild(chartIntro)
    if (chartObj.wortfeld !== null) {
        chartArea.appendChild(chartWortfeld)
    }
    if (chartObj.topicModeling !== null) {
        chartArea.appendChild(chartTopicModeling)
    }
    if (chartObj.correlation !== null) {
        chartArea.appendChild(chartCorrelation)
    }

    if (target === null){
        document.body.appendChild(chartArea)
    } else {
        target.appendChild(chartArea)
    }

    createChart(data1, data2, "." + chartObj.className, ldaTopicNr, semanticTopic, chartObj)
    if (data1_f50 !== null && data2_f50 !== null) {
        const chartF50Headline = document.createElement("h3")
        chartF50Headline.classList.add(chartObj.className + "_f50headline", "chartArea_f50headline")
        chartF50Headline.innerHTML = "Erste 50 Folgen:"
        chartArea.appendChild(chartF50Headline)
        createChart(data1_f50, data2_f50, "." + chartObj.className, ldaTopicNr, semanticTopic, chartObj)
    }

    return chartArea
}