import "./about.css"

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
    para.textContent = `At Abyssinia Coffee, every cup tells a story of purity, tradition, and care. 
                        Our beans are organically grown in the rich highlands of Ethiopia, nurtured without 
                        synthetic fertilizers or harmful chemicals. From seed to sip, we honor sustainable 
                        farming methods that protect the land and preserve the natural essence of each bean. 
                        The result? A bold, rich, and clean flavor that lets you taste the earth's goodness in 
                        every brew.`
    contentContainer.appendChild(para)

    const button = document.createElement("button")
    button.classList.add("about-btn")
    button.textContent = "Visit Us"
    contentContainer.appendChild(button)
}