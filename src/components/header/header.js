export const createHeader = () => {
    const header = document.createElement("div")
    header.classList.add("header");

    const link1 = document.createElement("a")
    link1.classList.add("header_link", "header_link1")
    link1.innerHTML = "Methodik";
    link1.href = "#methodik"

    const link2 = document.createElement("a")
    link2.classList.add("header_link", "header_link2")
    link2.innerHTML = "Ergebnisse";
    link2.href = "#ergebnisse"

    const link3 = document.createElement("a")
    link3.classList.add("header_link", "header_link3")
    link3.innerHTML = "Repository";
    link3.href = "https://github.com/Tholke/topic-modeling-pandemie"
    link3.target = "_blank"

    header.appendChild(link1)
    header.appendChild(link2)
    header.appendChild(link3)
    document.body.appendChild(header)
}