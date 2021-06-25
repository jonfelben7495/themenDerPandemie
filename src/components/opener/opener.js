export const createOpener = () => {
    const opener = document.createElement("div")
    opener.classList.add("opener");

    const openerHeadline = document.createElement("h1");
    openerHeadline.classList.add("opener_headline");
    openerHeadline.innerHTML = "Die Themen der Pandemie";

    const openerSub = document.createElement("p");
    openerSub.classList.add("opener_sub");
    openerSub.innerHTML = "Seit März 2020 bestimmt die Corona-Pandemie die mediale Berichterstattung. Dabei waren zu unterschiedlichen Zeitpunkten der Pandemie verschiedene Themen besonders wichtig. Doch zu welchem Zeitpunkt wurden welche Themen auffallend ausgiebig diskutiert? Dieser Frage sind wir im Rahmen einer Übung an der Universität zu Köln nachgegangen. Hier sind unsere Ergebnisse."

    const openerButtonLine = document.createElement("div");
    openerButtonLine.classList.add("opener_buttonline");

    opener.appendChild(openerHeadline);
    opener.appendChild(openerSub);
    opener.appendChild(openerButtonLine);
    document.body.appendChild(opener)
}