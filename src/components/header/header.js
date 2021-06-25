export const createHeader = () => {
    const header = document.createElement("div")
    header.classList.add("header");

    const link1 = document.createElement("a")
    link1.classList.add("header_link", "header_link1")
    link1.innerHTML = "Methodik";

    const link2 = document.createElement("a")
    link2.classList.add("header_link", "header_link2")
    link2.innerHTML = "Ergebnisse";

    const link3 = document.createElement("a")
    link3.classList.add("header_link", "header_link3")
    link3.innerHTML = "Repository";

    header.appendChild(link1)
    header.appendChild(link2)
    header.appendChild(link3)
    document.body.appendChild(header)
}