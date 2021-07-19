export const createResults = () => {
    const results = document.createElement("div")
    results.classList.add("results");
    results.id = "ergebnisse";

    const resultsHeadline = document.createElement("h1");
    resultsHeadline.classList.add("results_headline");
    resultsHeadline.innerHTML = "Ergebnisse";

    const resultsIntro = document.createElement("p");
    resultsIntro.classList.add("results_intro");
    resultsIntro.innerHTML = "Im Folgenden stellen wir die Ergebnisse unserer Untersuchungen vor. Dazu wird in Diagrammen das Auftreten der auf verschiedene Arten und Weisen definierten Themen verglichen. Wie bereits angedeutet wurde auf Basis des Pearson-Koeffizients verglichen, wie ähnlich die errechneten Werte für die Themen aus Wortfeldanalyse und topic modeling sind. Themenbereiche, die sich auf dieser Grundlage ähneln, werden gemeinsam in einem Diagramm dargestellt, um einen direkten Vergleich zu bieten. Themen, die nicht über einen solchen Vergleichspartner verfügen, werden einzeln dargestellt. Im Anschluss an diese Präsentation finden sich dann auch noch einmal alle Themen und ihre Verläufe als Einzeldarstellung."

    results.appendChild(resultsHeadline)
    results.appendChild(resultsIntro)

    document.body.appendChild(results)
}