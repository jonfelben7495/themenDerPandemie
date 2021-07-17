export const createIntro = () => {
    const intro = document.createElement("div")
    intro.classList.add("intro");

    const introHeadline = document.createElement("h1");
    introHeadline.classList.add("intro_headline");
    introHeadline.innerHTML = "Intro";

    const introText = document.createElement("div")
    introText.classList.add("intro_text");

    const introParagraph1 = document.createElement("p");
    introParagraph1.classList.add("intro_p");
    introParagraph1.innerHTML = "Den Ausgangspunkt unserer Forschung stellt der Podcast Coronavirus-Update des NDR dar. Seit Ende Februar 2020 erörtern die Virolog:innen Prof. Dr. Christian Drosten und Prof. Dr. Sandra Ciesek in diesem die aktuelle pandemische Lage und besprechen die derzeit wichtigsten Themen rund um das Virus. Seither gilt der Podcast als eines der einflussreichsten und am häufigsten zitierten medialen Produkte im Rahmen der Corona-Berichterstattung. Daher dienen die Skripte der verschiedenen Folgen des Podcasts als Datengrundlage für die Untersuchung der Themenentwicklung im Verlauf der Pandemie. Dazu werden zwei Verfahren eingesetzt, die in der wissenschaftlichen Praxis häufig zur Findung von Themen innerhalb von Korpora verwendet werden. "

    const introParagraph2 = document.createElement("p");
    introParagraph2.classList.add("intro_p");
    introParagraph2.innerHTML = "Zum einen wird eine Wortfeldanalyse angestellt, bei der verschiedene Wortfelder vordefiniert und die Skripte auf das Auftreten dieser Begriffe untersucht werden. Zum anderen wird auf Basis der Skripte ein topic modeling-Verfahren durchgeführt. Dieser Algorithmus bestimmt auf Basis des gemeinsamen Auftretens verschiedener Begriffe Themenfelder, die im Anschluss interpretiert werden können. Detailliertere Informationen zu beiden Verfahren sind im Abschnitt Methodik zu finden. Durch diese unterschiedlichen Methoden wollten wir zudem feststellen, wie sehr sich die Themenfindung durch subjektiv festgelegte Wortfelder und einem objektiv arbeitenden Algorithmus ähnnelt. Auf Basis der so erzeugten Ergebnisse könnten sich Stärken und Schwächen der jeweiligen Methode ableiten lassen."

    introText.appendChild(introParagraph1)
    introText.appendChild(introParagraph2)
    intro.appendChild(introHeadline)
    intro.appendChild(introText)

    document.body.appendChild(intro)
}