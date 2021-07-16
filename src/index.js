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
const chart6 = require("./data/chart6.json")
const chart7 = require("./data/chart7.json")
const chart8 = require("./data/chart8.json")
const chart9 = require("./data/chart9.json")
const chart10 = require("./data/chart10.json")
const chart11 = require("./data/chart11.json")
const chart12 = require("./data/chart12.json")
const chart13 = require("./data/chart13.json")
const chart14 = require("./data/chart14.json")
const chart15 = require("./data/chart15.json")

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

const test = document.createElement("h1");
test.innerHTML = "Ab hier Test";
document.body.append(test)

const chartArea6 = createChartArea(chart6, ldaTopicsPerFile, semanticTopicsPerFile, "0", "wissenschaft")
const chartArea7 = createChartArea(chart7, ldaTopicsPerFile, semanticTopicsPerFile, "1", "wissenschaft")
const chartArea8 = createChartArea(chart8, ldaTopicsPerFile, semanticTopicsPerFile, "2", "wissenschaft")
const chartArea9 = createChartArea(chart9, ldaTopicsPerFile, semanticTopicsPerFile, "3", "wissenschaft")
const chartArea10 = createChartArea(chart10, ldaTopicsPerFile, semanticTopicsPerFile, "4", "wissenschaft")

const chartArea11 = createChartArea(chart11, ldaTopicsPerFile, semanticTopicsPerFile, "4", "wissenschaft")
const chartArea12 = createChartArea(chart12, ldaTopicsPerFile, semanticTopicsPerFile, "4", "politik")
const chartArea13 = createChartArea(chart13, ldaTopicsPerFile, semanticTopicsPerFile, "4", "gesellschaft")
const chartArea14 = createChartArea(chart14, ldaTopicsPerFile, semanticTopicsPerFile, "4", "mensch")
const chartArea15 = createChartArea(chart15, ldaTopicsPerFile, semanticTopicsPerFile, "4", "virus")
