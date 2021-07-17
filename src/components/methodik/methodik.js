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
    methodikIntro.innerHTML = "Für den Vergleich von subjektiven Wortfeldern und durch machine learning geschaffene Themenfeldern waren mehrere Schritte notwendig. Genutzt wurden die Skripts des Coronavirus-Update des NDR. Die Texte dieser Skripte wurden aus den öffentlich zugänglichen PDF-Dateien des NDR extrahiert und anschließend bereinigt. Währenddessen wurden Begriffe, die wir als wichtig für die Pandemie bzw. das Pandemiegeschehen erachten, gesammelt und in fünf verschiedene Themen eingeordnet. Daraufhin wurde für jede Folge des Podcasts ermittelt, in welchem Verhältnis die Themen in der jeweiligen Folge auftauchen. Als machine learning Algorithmus wurde Latent Dirichlet Allocation (LDA) genutzt. Hier wurden auch fünf Themenfelder generiert und ausgewertet in welchem Verhältnis diese in den Podcastfolgen auftreten. Zusätzlich wurde diesen Themen anhand der für jedes Thema wichtigsten Wörtern ein Label bzw. Titel gegeben. Um auszuwerten, ob die durch LDA erzeugten Themen Ähnlichkeiten zu den selbst erstellten Wortfeldern vorweisen, wurde die Pearson-Korrelation berechnet. Dieser Koeffizient wurde schließlich verwendet, um zu entscheiden, welche Themen in einer gemeinsamen Grafik auftauchen sollen."

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
    methodik1Text.innerHTML = "Für die Wortfeldanalyse wurden Begriffe, die von uns als wichtig für die Pandemie angesehen wurden, gesammelt und in fünf Wortfelder eingeordnet. Anschließend wurde im Skript des Corona Updates gezählt, wie häufig die Begriffe jedes Wortfeldes vorkommen und schließlich das Verhältnis der Wortfelder in jeder Podcastfolge berechnet.";
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
    methodik2Text.innerHTML = "Es wurden fünf Themen durch LDA aus den Skripts der Corona Update-Folgen extrahiert. LDA erstellt hierfür fünf leere Themen und weist jedem Wort zu, zu wie viel Prozent dieses Wort zu diesen Themen gehört. Anschließend kann für jede Folge extrahiert werden, in welchem Verhältnis die Themen behandelt wurden. Da die durch LDA erstellten Themen keine Bezeichnungen besitzen, wurden diese händisch auf Basis der für ein Thema wichtigsten Begriffe benannt.";
    methodik2.appendChild(methodik2Text)

    methodikVergleich.appendChild(methodik1)
    methodikVergleich.appendChild(methodik2)
    methodik.appendChild(methodikHeadline)
    methodik.appendChild(methodikIntro)
    methodik.appendChild(methodikVergleich)

    document.body.appendChild(methodik)
}