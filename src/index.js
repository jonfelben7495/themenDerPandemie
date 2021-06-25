import "./index.css";
import {createChartArea} from "./components/chartArea/chartArea";
import {createHeader} from "./components/header/header";
import {createOpener} from "./components/opener/opener";
const data1 = require("./data/data1.json")
const data2 = require("./data/data2.json")

const header = createHeader();
const opener = createOpener();
const chartArea1 = createChartArea("chartArea1", "Headline 1", data1, data2)
const chartArea2 = createChartArea("chartArea2", "Headline 2", data1, data2)