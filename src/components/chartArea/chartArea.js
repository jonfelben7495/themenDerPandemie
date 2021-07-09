import {createChart} from "../chart/chart";

export const createChartArea = (chartObj, data1, data2) => {
    const chartArea = document.createElement("div")
    chartArea.classList.add(chartObj.className, "chartArea")

    const chartHeadline = document.createElement("h2")
    chartHeadline.classList.add(chartObj.className + "_headline", "chartArea_headline")
    chartHeadline.innerHTML = chartObj.headline

    const chartIntro = document.createElement("p")
    chartIntro.classList.add(chartObj.className + "_intro", "chartArea_intro")
    chartIntro.innerHTML = chartObj.intro;

    const chartWortfeld = document.createElement("p");
    chartWortfeld.classList.add(chartObj.className + "_wf", "chartArea_wf")
    chartWortfeld.innerHTML = "<b>Wortfeld:</b> " + chartObj.wortfeld.join(', ');

    const chartTopicModeling = document.createElement("p");
    chartTopicModeling.classList.add(chartObj.className + "_tm", "chartArea_tm")
    chartTopicModeling.innerHTML = "<b>Topic modeling:</b> " + chartObj.topicModeling.join(', ');

    chartArea.appendChild(chartHeadline)
    chartArea.appendChild(chartIntro)
    chartArea.appendChild(chartWortfeld)
    chartArea.appendChild(chartTopicModeling)
    document.body.appendChild(chartArea)
    createChart(data1, data2, "." + chartObj.className)

    return chartArea
}