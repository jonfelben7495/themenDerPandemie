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
const ldaTopicsPerFile = require("./data/lda_topics_per_file2.json")
const semanticTopicsPerFile = require("./data/semantic_topics_per_file.json")

const header = createHeader();
const opener = createOpener();
const intro = createIntro();
const methodik = createMethodik();
const results = createResults()
const chartArea1 = createChartArea(chart1, ldaTopicsPerFile, semanticTopicsPerFile, "0", "wissenschaft")
const chartArea2 = createChartArea(chart2, ldaTopicsPerFile, semanticTopicsPerFile, "3", "politik")
const chartArea3 = createChartArea(chart3, ldaTopicsPerFile, semanticTopicsPerFile, "3", "gesellschaft")
const chartArea4 = createChartArea(chart4, ldaTopicsPerFile, semanticTopicsPerFile, "1", "mensch")
const chartArea5 = createChartArea(chart5, ldaTopicsPerFile, semanticTopicsPerFile, "2", "wissenschaft")
