export const createOpener = () => {
    const opener = document.createElement("div")
    opener.classList.add("opener");

    const openerHeadline = document.createElement("h1");
    openerHeadline.classList.add("opener_headline");
    openerHeadline.innerHTML = "Die Themen der Pandemie";

    const openerSub = document.createElement("p");
    openerSub.classList.add("opener_sub");
    openerSub.innerHTML = "Seit März 2020 bestimmt die Corona-Pandemie die mediale Berichterstattung. Dabei waren zu unterschiedlichen Zeitpunkten der Pandemie verschiedene Themen besonders wichtig. Doch zu welchem Zeitpunkt wurden welche Themen auffallend ausgiebig diskutiert? Und wie können überhaupt Themen innerhalb von Texten identifiziert werden? Diesen Fragen sind wir im Rahmen einer Übung an der Universität zu Köln nachgegangen."

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

    const openerMembers = document.createElement("div");
    openerMembers.classList.add("opener_members");
    const memberHeadline = document.createElement("h3");
    memberHeadline.innerHTML = "Projektmitglieder:"
    const member1 = document.createElement("p");
    member1.innerHTML = "Hauke Lindstädt (MA Linguistik)";
    const member2 = document.createElement("p");
    member2.innerHTML = "Tobias Nowak (MA Linguistik)";
    const member3 = document.createElement("p");
    member3.innerHTML = "Thomas Oehlke (MA Informationsverarbeitung)";
    const member4 = document.createElement("p");
    member4.innerHTML = "Jonas Schmidt (MA Informationsverarbeitung)";

    openerMembers.appendChild(memberHeadline)
    openerMembers.appendChild(member1)
    openerMembers.appendChild(member2)
    openerMembers.appendChild(member3)
    openerMembers.appendChild(member4)

    opener.appendChild(openerHeadline);
    opener.appendChild(openerSub);
    opener.appendChild(openerButtonLine);
    opener.appendChild(openerMembers)
    document.body.appendChild(opener)
}