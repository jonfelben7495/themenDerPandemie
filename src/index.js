import "./index.css";
import {createChartArea} from "./components/chartArea/chartArea";
import {createHeader} from "./components/header/header";
import {createOpener} from "./components/opener/opener";
import {createIntro} from "./components/intro/intro";
import {createMethodik} from "./components/methodik/methodik";
import {createResults} from "./components/results/results";
const data1 = require("./data/data1.json")
const data2 = require("./data/data2.json")
const chart1 = require("./data/chart1.json")
const chart2 = require("./data/chart2.json")
const chart3 = require("./data/chart3.json")
const chart4 = require("./data/chart4.json")
const chart5 = require("./data/chart5.json")

const header = createHeader();
const opener = createOpener();
const intro = createIntro();
const methodik = createMethodik();
const results = createResults()
const chartArea1 = createChartArea(chart1, data1, data2)
const chartArea2 = createChartArea(chart2, data1, data2)
const chartArea3 = createChartArea(chart3, data1, data2)
const chartArea4 = createChartArea(chart4, data1, data2)
const chartArea5 = createChartArea(chart5, data1, data2)