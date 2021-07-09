import listImg from "../../images/auffuhren.png"
import algImg from "../../images/neural.png"

export const createMethodik = () => {
    const methodik = document.createElement("div")
    methodik.classList.add("methodik");
    methodik.id = "methodik";

    const methodikHeadline = document.createElement("h1");
    methodikHeadline.classList.add("methodik_headline");
    methodikHeadline.innerHTML = "Methodik";

    const methodikIntro = document.createElement("p");
    methodikIntro.classList.add("methodik_intro");
    methodikIntro.innerHTML = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."

    const methodikVergleich = document.createElement("div")
    methodikVergleich.classList.add("methodik_vergleich");

    const methodik1 = document.createElement("div");
    methodik1.classList.add("methodik_vergleich_1");

    const methodik1ImgContainer = document.createElement("div")
    methodik1ImgContainer.classList.add("methodik_vergleich_img");

    const methodik1Img = document.createElement("img")
    methodik1Img.src = listImg;
    methodik1ImgContainer.appendChild(methodik1Img);
    methodik1.appendChild(methodik1ImgContainer)

    const methodik1Headline = document.createElement("h3")
    methodik1Headline.classList.add("methodik_vergleich_headline")
    methodik1Headline.innerHTML = "Wortfeldanalyse";
    methodik1.appendChild(methodik1Headline)

    const methodik1Text = document.createElement("p")
    methodik1Text.classList.add("methodik_vergleich_text")
    methodik1Text.innerHTML = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
    methodik1.appendChild(methodik1Text)

    const methodik2 = document.createElement("div");
    methodik2.classList.add("methodik_vergleich_2");

    const methodik2ImgContainer = document.createElement("div")
    methodik2ImgContainer.classList.add("methodik_vergleich_img");

    const methodik2Img = document.createElement("img")
    methodik2Img.src = algImg;
    methodik2ImgContainer.appendChild(methodik2Img);
    methodik2.appendChild(methodik2ImgContainer)

    const methodik2Headline = document.createElement("h3")
    methodik2Headline.classList.add("methodik_vergleich_headline")
    methodik2Headline.innerHTML = "Topic modeling";
    methodik2.appendChild(methodik2Headline)

    const methodik2Text = document.createElement("p")
    methodik2Text.classList.add("methodik_vergleich_text")
    methodik2Text.innerHTML = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
    methodik2.appendChild(methodik2Text)

    methodikVergleich.appendChild(methodik1)
    methodikVergleich.appendChild(methodik2)
    methodik.appendChild(methodikHeadline)
    methodik.appendChild(methodikIntro)
    methodik.appendChild(methodikVergleich)

    document.body.appendChild(methodik)
}