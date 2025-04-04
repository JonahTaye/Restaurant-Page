import styles from "./menu.css"

export const loadMenuPage = function () {
    const mainContentDiv = document.getElementById("content")
    const menuContentDiv = document.createElement("div")
    menuContentDiv.classList.add("menu-content")
    mainContentDiv.appendChild(menuContentDiv)

    const coffeeItems = document.createElement("div")
    coffeeItems.classList.add("menu-coffee-items")
    menuContentDiv.appendChild(coffeeItems)

    const sideItems = document.createElement("div")
    sideItems.classList.add("menu-side-items")
    menuContentDiv.appendChild(sideItems)

    const bakedItems = document.createElement("div")
    bakedItems.classList.add("menu-baked-items")
    menuContentDiv.appendChild(bakedItems)

    createCoffeeItems(coffeeItems)
    createSideItems(sideItems)
    createBakedItems(bakedItems)
}

const Item = (name, description, price) => ({ name, description, price })

const createCoffeeItems = function (coffee) {
    const header = document.createElement("h1")
    header.classList.add("menu-coffee-header")
    header.textContent = "Coffees"
    coffee.appendChild(header)

    const coffeeItemsContainer = document.createElement("div")
    coffeeItemsContainer.classList.add("menu-coffee-container")
    coffee.appendChild(coffeeItemsContainer)


    const coffeeItemsList = {
        ethiopian: Item(
            "Ethiopian Coffee",
            "Rich and floral with hints of berry. A vibrant and aromatic brew from the birthplace of coffee.",
            "79.99 ETB"
        ),
        espresso: Item(
            "Espresso",
            "Strong, rich, and bold. The foundation of most coffee drinks. Intense flavor with a slightly bitter finish.",
            "79.99 ETB"
        ),
        americano: Item(
            "Americano",
            "Smooth and diluted. Espresso with added hot water. Lighter than espresso but still has depth.",
            "99.99 ETB"
        ),
        latte: Item(
            "Latte",
            "Creamy and mellow. Espresso with lots of steamed milk and a light foam topping. Very approachable.",
            "99.99 ETB"
        ),
        mocha: Item(
            "Mocha",
            "A chocolatey twist to your coffee. Rich espresso blended with chocolate syrup and steamed milk.",
            "149.99  ETB"
        ),
        cortado: Item(
            "Cortado",
            "Equal parts espresso and steamed milk. Bold, yet smooth — a true balance.",
            "109.99 ETB"
        ),
        affogato: Item(
            "Affogato",
            "Vanilla ice cream drowned in a shot of hot espresso. Dessert and coffee in one.",
            "89.99 ETB"
        ),
        macchiato: Item(
            "Macchiato",
            "Espresso with a dollop of frothy milk. Bold with just a touch of creaminess.",
            "69.99 ETB"
        ),
        cappuccino: Item(
            "Cappuccino",
            "A classic! Equal parts espresso, steamed milk, and milk foam. Frothy and flavorful.",
            "79.99 ETB"
        ),
        turkish: Item(
            "Turkish Coffee",
            "Finely ground coffee simmered in a pot with sugar and cardamom — thick, strong, and aromatic.",
            "89.99 ETB"
        ),
    }
    const images = require.context('./images/coffee-items', false, /\.jpg$/)

    for (let items in coffeeItemsList) {
        const coffeeCard = document.createElement("div")
        coffeeCard.classList.add("menu-coffee-card")

        const textContainer = document.createElement("div")
        textContainer.classList.add("menu-text-container")

        const imagePath = images(`./${items}.jpg`)
        
        const image = document.createElement("div")
        image.classList.add("menu-image")
        image.style.backgroundImage = `url(${imagePath})`
        image.style.backgroundSize = 'cover'
        image.style.backgroundRepeat = 'no-repeat'

        const coffeeName = document.createElement("div")
        coffeeName.classList.add("menu-coffee-name")
        coffeeName.textContent = coffeeItemsList[items].name

        const coffeeDesc = document.createElement("div")
        coffeeDesc.classList.add("menu-coffee-description")
        coffeeDesc.textContent = coffeeItemsList[items].description

        const coffeePrice = document.createElement("div")
        coffeePrice.classList.add("menu-coffee-price")
        coffeePrice.textContent = coffeeItemsList[items].price

        coffeeItemsContainer.appendChild(coffeeCard)
        textContainer.append(coffeeName, coffeePrice, coffeeDesc)
        coffeeCard.append(image, textContainer)
    }
}

const createSideItems = function (side) {
    const header = document.createElement("h1")
    header.classList.add("menu-side-header")
    header.textContent = "Tasty Sides"
    side.appendChild(header)

    const sideItemsContainer = document.createElement("div")
    sideItemsContainer.classList.add("menu-side-container")
    side.appendChild(sideItemsContainer)


    const sideItemsList = {
        avocadoToast: Item(
            "Avocado Toast",
            "Toasted artisan bread topped with creamy avocado, cherry tomatoes, and a sprinkle of chili flakes.",
            "149.99 ETB"
        ),
        breakfastSandwich: Item(
            "Breakfast Sandwich",
            "Egg, cheese, and your choice of bacon or sausage on a toasted English bread.",
            "229.99 ETB"
        ),
        veggieWrap: Item(
            "Veggie Wrap",
            "A tortilla filled with fresh lettuce, tomatoes, cucumber, carrots, and hummus.",
            "399.99 ETB"
        ),
        quiche: Item(
            "Mini Quiche",
            "Savory pastry filled with egg, cheese, and vegetables. Great warm or cold.",
            "219.99 ETB"
        ),
        bagelCreamCheese: Item(
            "Bagel with Cream Cheese",
            "Freshly baked bagel served with a thick spread of creamy cheese.",
            "169.99 ETB"
        ),    
        yogurtParfait: Item(
            "Yogurt Parfait",
            "Creamy yogurt layered with granola and fresh fruit. A healthy and tasty option.",
            "399.99 ETB"
        ),
        eggBite: Item(
            "Egg Bites",
            "Soft-baked egg bites with cheese and veggies. High protein and low carb.",
            "289.99 ETB"
        ),
        toasties: Item(
            "Cheese Toasties",
            "Warm grilled bread filled with melted cheese — the ultimate comfort food.",
            "299.99 ETB"
        )
    }

    const images = require.context('./images/side-items', false, /\.jpg$/)

    for (let items in sideItemsList) {
        const sideCard = document.createElement("div")
        sideCard.classList.add("menu-side-card")

        const textContainer = document.createElement("div")
        textContainer.classList.add("menu-text-container")

        const imagePath = images(`./${items}.jpg`)
        
        const image = document.createElement("div")
        image.classList.add("menu-image")
        image.style.backgroundImage = `url(${imagePath})`
        image.style.backgroundSize = 'cover'
        image.style.backgroundRepeat = 'no-repeat'

        const sideName = document.createElement("div")
        sideName.classList.add("menu-side-name")
        sideName.textContent = sideItemsList[items].name

        const sideDesc = document.createElement("div")
        sideDesc.classList.add("menu-side-description")
        sideDesc.textContent = sideItemsList[items].description

        const sidePrice = document.createElement("div")
        sidePrice.classList.add("menu-side-price")
        sidePrice.textContent = sideItemsList[items].price

        sideItemsContainer.appendChild(sideCard)
        textContainer.append(sideName, sidePrice, sideDesc)
        sideCard.append(image, textContainer)
    }
}

const createBakedItems = function (bakedGoods) {
    const header = document.createElement("h1")
    header.classList.add("menu-bakedgoods-header")
    header.textContent = "Baked Goods"
    bakedGoods.appendChild(header)

    const bakedItemsContainer = document.createElement("div")
    bakedItemsContainer.classList.add("menu-bakedgoods-container")
    bakedGoods.appendChild(bakedItemsContainer)

    const bakedGoodsList = {
        blueberryMuffin: Item(
          "Blueberry Muffin",
          "Soft and fluffy muffin bursting with sweet blueberries. Perfect with coffee.",
          "399.99 ETB"
        ),
        chocolateCroissant: Item(
          "Chocolate Croissant",
          "Flaky, buttery croissant filled with rich chocolate. A delightful pastry treat.",
          "239.99 ETB"
        ),
        lemonScone: Item(
          "Lemon Scone",
          "Zesty lemon flavor with a hint of crunch from poppy seeds. Slightly sweet and crumbly.",
          "379.99 ETB"
        ),
        cinnamonRoll: Item(
          "Cinnamon Roll",
          "Warm, gooey cinnamon roll topped with creamy icing. A sweet and comforting choice.",
          "359.99 ETB"
        ),
        bananaBread: Item(
          "Banana Bread Slice",
          "Moist and flavorful banana bread made with ripe bananas and a hint of spice.",
          "229.99 ETB"
        ),
        appleTurnover: Item(
          "Apple Turnover",
          "Golden pastry filled with spiced apple filling. Crispy, sweet, and satisfying.",
          "259.99 ETB"
        ),
        chocolateChipCookie: Item(
          "Chocolate Chip Cookie",
          "Chewy and rich cookie loaded with chocolate chips. A timeless classic.",
          "199.99 ETB"
        ),
        brownie: Item(
          "Fudge Brownie",
          "Dense and fudgy brownie with a rich chocolate flavor. Perfect for dessert lovers.",
          "239.99 ETB"
        ),
        coffeeCake: Item(
          "Coffee Cake Slice",
          "Buttery cake with a cinnamon swirl and crumb topping. Great with your favorite brew.",
          "179.99 ETB"
        )
      }

    const images = require.context('./images/bakedgoods-items', false, /\.jpg$/)

    for (let items in bakedGoodsList) {
        const bakedGoodsCard = document.createElement("div")
        bakedGoodsCard.classList.add("menu-bakedgoods-card")

        const textContainer = document.createElement("div")
        textContainer.classList.add("menu-text-container")

        const imagePath = images(`./${items}.jpg`)
        
        const image = document.createElement("div")
        image.classList.add("menu-image")
        image.style.backgroundImage = `url(${imagePath})`
        image.style.backgroundSize = 'cover'
        image.style.backgroundRepeat = 'no-repeat'

        const bakedItemName = document.createElement("div")
        bakedItemName.classList.add("menu-bakedgoods-name")
        bakedItemName.textContent = bakedGoodsList[items].name

        const bakedItemDesc = document.createElement("div")
        bakedItemDesc.classList.add("menu-bakedgoods-description")
        bakedItemDesc.textContent = bakedGoodsList[items].description

        const bakedItemPrice = document.createElement("div")
        bakedItemPrice.classList.add("menu-bakedgoods-price")
        bakedItemPrice.textContent = bakedGoodsList[items].price

        bakedItemsContainer.appendChild(bakedGoodsCard)
        textContainer.append(bakedItemName, bakedItemPrice, bakedItemDesc)
        bakedGoodsCard.append(image, textContainer)
    }
}
