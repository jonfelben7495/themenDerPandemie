import {createChart} from "../chart/chart";

export const createChartArea = (chartAreaClassName, headline, data1, data2) => {
    const chartArea = document.createElement("div")
    chartArea.classList.add(chartAreaClassName, "chartArea")

    const chartHeadline = document.createElement("h2")
    chartHeadline.classList.add(chartAreaClassName + "_headline", "chartArea_headline")
    chartHeadline.innerHTML = headline

    chartArea.appendChild(chartHeadline)
    document.body.appendChild(chartArea)
    createChart(data1, data2, "." + chartAreaClassName)

    return chartArea
}