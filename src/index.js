import "./index.css";
import {createChartArea} from "./components/chartArea/chartArea";
import {createHeader} from "./components/header/header";
import {createOpener} from "./components/opener/opener";
import {createIntro} from "./components/intro/intro";
import {createMethodik} from "./components/methodik/methodik";
import {createResults} from "./components/results/results";
import {createSingleTopicArea} from "./components/singleTopicArea/singleTopicArea";
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
const chart16 = require("./data/chart16.json")
const chart17 = require("./data/chart17.json")

const ldaTopicsPerFile = require("./data/lda_topics_per_file2.json")
const semanticTopicsPerFile = require("./data/semantic_topics_per_file.json")
const ldaTopicsPerFileFirst50 = require("./data/lda_topic_per_file_f50.json")
const semanticTopicsPerFileFirst50 = require("./data/semantic_topics_per_file_f50.json")

const header = createHeader();
const opener = createOpener();
const intro = createIntro();
const methodik = createMethodik();
const results = createResults()
const chartArea2 = createChartArea(chart2, ldaTopicsPerFile, semanticTopicsPerFile, "3", "politik", ldaTopicsPerFileFirst50, semanticTopicsPerFileFirst50)
const chartArea1 = createChartArea(chart1, ldaTopicsPerFile, semanticTopicsPerFile, "0", "wissenschaft", ldaTopicsPerFileFirst50, semanticTopicsPerFileFirst50)
const chartArea3 = createChartArea(chart3, ldaTopicsPerFile, semanticTopicsPerFile, "3", "gesellschaft", ldaTopicsPerFileFirst50, semanticTopicsPerFileFirst50)
const chartArea4 = createChartArea(chart4, ldaTopicsPerFile, semanticTopicsPerFile, "1", "mensch", ldaTopicsPerFileFirst50, semanticTopicsPerFileFirst50)
const chartArea5 = createChartArea(chart5, ldaTopicsPerFile, semanticTopicsPerFile, "2", "wissenschaft", ldaTopicsPerFileFirst50, semanticTopicsPerFileFirst50)
const chartArea6 = createChartArea(chart6, ldaTopicsPerFile, semanticTopicsPerFile, "4", null, ldaTopicsPerFileFirst50, semanticTopicsPerFileFirst50)
const chartArea7 = createChartArea(chart7, ldaTopicsPerFile, semanticTopicsPerFile, null, "virus", ldaTopicsPerFileFirst50, semanticTopicsPerFileFirst50)

const singleTopicArea = createSingleTopicArea()

const chartArea8 = createChartArea(chart8, ldaTopicsPerFile, semanticTopicsPerFile, "0", null, null, null, singleTopicArea)
const chartArea9 = createChartArea(chart9, ldaTopicsPerFile, semanticTopicsPerFile, "1", null, null, null, singleTopicArea)
const chartArea10 = createChartArea(chart10, ldaTopicsPerFile, semanticTopicsPerFile, "2", null, null, null, singleTopicArea)
const chartArea11 = createChartArea(chart11, ldaTopicsPerFile, semanticTopicsPerFile, "3", null, null, null, singleTopicArea)
const chartArea12 = createChartArea(chart12, ldaTopicsPerFile, semanticTopicsPerFile, "4", null, null, null, singleTopicArea)

const chartArea13 = createChartArea(chart13, ldaTopicsPerFile, semanticTopicsPerFile, null, "gesellschaft", null, null, singleTopicArea)
const chartArea14 = createChartArea(chart14, ldaTopicsPerFile, semanticTopicsPerFile, null, "mensch", null, null, singleTopicArea)
const chartArea15 = createChartArea(chart15, ldaTopicsPerFile, semanticTopicsPerFile, null, "politik", null, null, singleTopicArea)
const chartArea16 = createChartArea(chart16, ldaTopicsPerFile, semanticTopicsPerFile, null, "virus", null, null, singleTopicArea)
const chartArea17 = createChartArea(chart17, ldaTopicsPerFile, semanticTopicsPerFile, null, "wissenschaft", null, null, singleTopicArea)
