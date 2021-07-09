export const createResults = () => {
    const results = document.createElement("div")
    results.classList.add("results");
    results.id = "ergebnisse";

    const resultsHeadline = document.createElement("h1");
    resultsHeadline.classList.add("results_headline");
    resultsHeadline.innerHTML = "Ergebnisse";

    const resultsIntro = document.createElement("p");
    resultsIntro.classList.add("results_intro");
    resultsIntro.innerHTML = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."

    results.appendChild(resultsHeadline)
    results.appendChild(resultsIntro)

    document.body.appendChild(results)
}