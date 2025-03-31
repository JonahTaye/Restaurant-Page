export const loadAboutPage = function () {
    const mainContentDiv = document.getElementById("content")
    
    const contentContainer = document.createElement("div")
    contentContainer.classList.add("about-container")
    mainContentDiv.append(contentContainer)

    const header = document.createElement("h1")
    header.classList.add("slogan-header")
    header.textContent = "BEST ORGANIC COFFEE"
    contentContainer.appendChild(header)

    const para = document.createElement("p")
    para.classList.add("about-para")
    para.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Quia culpa facilis ea laborum voluptatum? Laborum, culpa et. Nesciunt, fugit pariatur! 
                        A distinctio quam dicta, explicabo voluptate non? Consequuntur, animi voluptatibus!`
    contentContainer.appendChild(para)

    const button = document.createElement("button")
    button.classList.add("about-btn")
    button.textContent = "Visit Us"
    contentContainer.appendChild(button)
}