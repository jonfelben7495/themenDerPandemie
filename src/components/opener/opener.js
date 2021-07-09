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

    const button1 = document.createElement("button");
    button1.classList.add("opener_button")
    button1.innerHTML = "Methodik";

    const buttonLink1 = document.createElement("a");
    buttonLink1.classList.add("opener_buttonlink");
    buttonLink1.href = "#methodik"
    buttonLink1.appendChild(button1)

    const button2 = document.createElement("button");
    button2.classList.add("opener_button")
    button2.innerHTML = "Ergebnisse";

    const buttonLink2 = document.createElement("a");
    buttonLink2.classList.add("opener_buttonlink");
    buttonLink2.href = "#ergebnisse"
    buttonLink2.appendChild(button2)

    const button3 = document.createElement("button");
    button3.classList.add("opener_button")
    button3.innerHTML = "Repository";

    const buttonLink3 = document.createElement("a");
    buttonLink3.classList.add("opener_buttonlink");
    buttonLink3.href = "https://github.com"
    buttonLink3.target = "_blank"
    buttonLink3.appendChild(button3)

    openerButtonLine.appendChild(buttonLink1);
    openerButtonLine.appendChild(buttonLink2);
    openerButtonLine.appendChild(buttonLink3);

    opener.appendChild(openerHeadline);
    opener.appendChild(openerSub);
    opener.appendChild(openerButtonLine);
    document.body.appendChild(opener)
}