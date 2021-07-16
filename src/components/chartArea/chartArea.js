import {createChart} from "../chart/chart";

export const createChartArea = (chartObj, data1, data2, ldaTopicNr, semanticTopic) => {
    const chartArea = document.createElement("div")
    chartArea.classList.add(chartObj.className, "chartArea")

    const chartHeadline = document.createElement("h2")
    chartHeadline.classList.add(chartObj.className + "_headline", "chartArea_headline")
    chartHeadline.innerHTML = chartObj.semanticTopic + " / " + chartObj.ldaTopic

    const chartIntro = document.createElement("p")
    chartIntro.classList.add(chartObj.className + "_intro", "chartArea_intro")
    chartIntro.innerHTML = chartObj.intro;

    const chartWortfeld = document.createElement("p");
    chartWortfeld.classList.add(chartObj.className + "_wf", "chartArea_wf")
    chartWortfeld.innerHTML = "<b>Wortfeld:</b> " + chartObj.wortfeld.join(', ');

    const chartTopicModeling = document.createElement("p");
    chartTopicModeling.classList.add(chartObj.className + "_tm", "chartArea_tm")
    chartTopicModeling.innerHTML = "<b>Topic modeling:</b> " + chartObj.topicModeling.join(', ');

    const chartCorrelation = document.createElement("p");
    chartCorrelation.classList.add(chartObj.className + "_cor", "chartArea_cor")
    chartCorrelation.innerHTML = "<b>Korrelation:</b> " + chartObj.correlation.toFixed(3);

    chartArea.appendChild(chartHeadline)
    chartArea.appendChild(chartIntro)
    chartArea.appendChild(chartWortfeld)
    chartArea.appendChild(chartTopicModeling)
    chartArea.appendChild(chartCorrelation)
    document.body.appendChild(chartArea)
    createChart(data1, data2, "." + chartObj.className, ldaTopicNr, semanticTopic, chartObj)

    return chartArea
}