import "./home.css"
import star from "./images/misc/star-icon.png"
import markImg from "./images/reviewers/mark.avif"
import stevenImg from "./images/reviewers/steven.jpg"
import ruthImg from "./images/reviewers/ruth.webp"
import abelImg from "./images/reviewers/abel.jpg"



export const loadHomePage = function() {
    const mainContentDiv = document.getElementById("content")
    
    const sloganSection = document.createElement("div")
    sloganSection.classList.add("slogan-section")
    mainContentDiv.appendChild(sloganSection)
    
    const coffeeSection = document.createElement("div")
    coffeeSection.classList.add("coffee-section")
    mainContentDiv.appendChild(coffeeSection)

    const reviewSection = document.createElement("div")
    reviewSection.classList.add("review-section")
    mainContentDiv.appendChild(reviewSection)

    createSloganSection(sloganSection)
    createCoffeeSection(coffeeSection)
    createReviewSection(reviewSection)
}

const createSloganSection = function(slogan) {
    const sloganContainer = document.createElement("div")
    sloganContainer.classList.add("slogan-container")
    slogan.appendChild(sloganContainer)

    const header = document.createElement("h1")
    header.classList.add("slogan-header")
    header.textContent = "Abyssinia Coffee"
    sloganContainer.appendChild(header)

    const para = document.createElement("p")
    para.classList.add("slogan-quote")
    para.textContent = "Where friends come to enjoy!"
    sloganContainer.appendChild(para)
    
}

const createCoffeeSection = function(coffeeSec) {
    const header = document.createElement("h1")
    header.classList.add("coffee-header")
    header.textContent = "Our Favorites"
    coffeeSec.appendChild(header)

    const coffeeContainer = document.createElement("div")
    coffeeContainer.classList.add("coffee-container")
    coffeeSec.appendChild(coffeeContainer)

    const coffeeList = {
        "Ethiopian Coffee": "Fruity and floral. Bright acidity, complex aroma. Often has berry or wine-like notes. A tribute to coffee's origin.",
        Espresso: "Strong, rich, and bold. The foundation of most coffee drinks. Intense flavor with a slightly bitter finish.",
        Mocha: "Chocolatey and sweet. A latte mixed with chocolate syrup or powder. Perfect for dessert lovers.",
        Cortado: "Bold and balanced. Equal parts espresso and warm milk. Less frothy than a cappuccino.",
        Affogato: "Sweet and indulgent. A scoop of vanilla ice cream “drowned” in a shot of hot espresso. It's a dessert plus coffee!",
        "Avocado Toast": "Sourdough topped with creamy smashed avocado, chili flakes, and a drizzle of olive oil.",
        "Veggie Wrap": "A tortilla filled with fresh lettuce, tomatoes, cucumber, carrots, and hummus.",
        "Blueberry Muffin": "Soft, buttery muffin packed with sweet blueberries and a crumb topping."
    }

    for (let coffee in coffeeList) {
        const coffeeCard = document.createElement("div")
        coffeeCard.classList.add("coffee-card")

        const textContainer = document.createElement("div")
        textContainer.classList.add("text-container")

        const coffeeName = document.createElement("h2")
        coffeeName.classList.add("coffee-name")
        coffeeName.textContent = coffee

        const coffeeDesc = document.createElement("div")
        coffeeDesc.classList.add("coffee-description")
        coffeeDesc.textContent = coffeeList[coffee]

        coffeeContainer.appendChild(coffeeCard)
        textContainer.append(coffeeName, coffeeDesc)
        coffeeCard.append(textContainer)
    }
}

const createReviewSection = function(reviewSec) {
    const header = document.createElement("h1")
    header.classList.add("review-header")
    header.textContent = "We have great reviews"
    reviewSec.appendChild(header)

    const reviewContainer = document.createElement("div")
    reviewContainer.classList.add("review-container")
    reviewSec.appendChild(reviewContainer)

    const UserReview = (name, review, rating) => {return { name, review, rating }}

    const generateReviewStars = function(rating, card) {
        console.log(rating)
        for (let i = 1; i <= rating; i++) {
            console.log(rating)
            const button = document.createElement("span")
            button.classList.add("review-star-container")
            
            const image = document.createElement("img")
            image.classList.add("review-stars")
            image.src = star
    
            card.appendChild(button)
            button.appendChild(image)
        }
    
    }

    const reviewList = {
        mark: UserReview(
            "Mark Hanson",
            "I had an amazing time with my friends",
            5,
        ),
        steven: UserReview(
            "Steven Bronson",
            "Really great staff. I had the best service",
            5,
        ),
        ruth: UserReview(
            "Ruth Berhe",
            "Best Coffee Place in Town",
            5,
        ),
        abel: UserReview(
            "Abel Tadesse",
            "Great coffee. Would recommend",
            4,
        )
    }

    const reviewerImg = [markImg, stevenImg, ruthImg, abelImg]
    let index = 0
    for (let reviewer in reviewList) {
        const reviewCard = document.createElement("div")
        reviewCard.classList.add("review-cards")
        reviewContainer.appendChild(reviewCard)

        const image = document.createElement("img")
        image.classList.add("reviewer-image")
        image.src = reviewerImg[index]
        index++
        

        const reviewerName = document.createElement("h2")
        reviewerName.classList.add("reviewer-name")

        const reviewGiven = document.createElement("div")
        reviewGiven.classList.add("review-given")

        reviewerName.textContent = reviewList[reviewer].name
        reviewGiven.textContent = reviewList[reviewer].review
        generateReviewStars(reviewList[reviewer].rating, reviewCard)

        reviewCard.prepend(image, reviewerName, reviewGiven)
    }
}

