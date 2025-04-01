import { loadHomePage } from "./home/home"
import { loadMenuPage } from "./menu/menu"
import { loadAboutPage } from "./about/about"

const home = document.querySelector(".home")
const menu = document.querySelector(".menu")
const about = document.querySelector(".about")
const content = document.getElementById("content")
const buttons = document.querySelectorAll('.nav-btn');

loadHomePage()

home.addEventListener("click", () => {
    content.innerHTML = ""
    loadHomePage()
})

menu.addEventListener("click", () => {
    content.innerHTML = ""
    loadMenuPage()
})

about.addEventListener("click", () => {
    content.innerHTML = ""
    loadAboutPage()
})

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('selected')) 
      btn.classList.add('selected')
    })
  })