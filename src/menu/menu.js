export const loadMenuPage = function () {
    const mainContentDiv = document.getElementById("content")

    const coffeeItems = document.createElement("div")
    coffeeItems.classList.add("coffee-items")
    mainContentDiv.appendChild(coffeeItems)

    const sideItems = document.createElement("div")
    sideItems.classList.add("side-items")
    mainContentDiv.appendChild(sideItems)

    const bakedItems = document.createElement("div")
    bakedItems.classList.add("baked-items")
    mainContentDiv.appendChild(bakedItems)

    createCoffeeItems(coffeeItems)
    createSideItems(sideItems)
    createBakedItems(bakedItems)
}

const Item = (name, description, price) => ({ name, description, price })

const createCoffeeItems = function (coffee) {
    const header = document.createElement("h1")
    header.classList.add("coffee-header")
    header.textContent = "Coffees"
    coffee.appendChild(header)

    const coffeeItemsContainer = document.createElement("div")
    coffeeItemsContainer.classList.add("coffee-container")
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
        flatWhite: Item(
            "Flat White",
            "Espresso with velvety steamed milk. Stronger than a latte, but smoother than a cappuccino.",
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
        irish: Item(
            "Irish Coffee",
            "Hot coffee mixed with Irish whiskey, sugar, and topped with cream. A cozy classic.",
            "99.99 ETB"
        ),
        vienna: Item(
            "Vienna Coffee",
            "Two shots of espresso topped with whipped cream instead of milk or foam.",
            "89.99 ETB"
        ),
        turkish: Item(
            "Turkish Coffee",
            "Finely ground coffee simmered in a pot with sugar and cardamom — thick, strong, and aromatic.",
            "89.99 ETB"
        ),
    }

    for (let items in coffeeItemsList) {
        console.log(items, coffeeItemsList[items])
        const image = document.createElement("img")
        image.classList.add("coffee-items-image")

        const coffeeName = document.createElement("div")
        coffeeName.classList.add("coffee-name")
        coffeeName.textContent = coffeeItemsList[items].name

        const coffeeDesc = document.createElement("div")
        coffeeDesc.classList.add("coffee-description")
        coffeeDesc.textContent = coffeeItemsList[items].description

        const coffeePrice = document.createElement("div")
        coffeePrice.classList.add("coffee-price")
        coffeePrice.textContent = coffeeItemsList[items].price

        coffeeItemsContainer.append(image, coffeeName, coffeeDesc, coffeePrice)
    }
}

const createSideItems = function (side) {
    const header = document.createElement("h1")
    header.classList.add("side-header")
    header.textContent = "Tasty Sides"
    side.appendChild(header)

    const sideItemsContainer = document.createElement("div")
    sideItemsContainer.classList.add("side-container")
    side.appendChild(sideItemsContainer)


    const sideItemsList = {
        avocadoToast: Item(
            "Avocado Toast",
            "Toasted artisan bread topped with creamy avocado, cherry tomatoes, and a sprinkle of chili flakes.",
            "149.99 ETB"
        ),
        breakfastSandwich: Item(
            "Breakfast Sandwich",
            "Egg, cheese, and your choice of bacon or sausage on a toasted English muffin.",
            "229.99 ETB"
        ),
        vaggieWrap: Item(
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

    for (let items in sideItemsList) {
        const image = document.createElement("img")
        image.classList.add("side-items-image")

        const sideName = document.createElement("div")
        sideName.classList.add("side-name")
        sideName.textContent = sideItemsList[items].name

        const sideDesc = document.createElement("div")
        sideDesc.classList.add("side-description")
        sideDesc.textContent = sideItemsList[items].description

        const sidePrice = document.createElement("div")
        sidePrice.classList.add("side-price")
        sidePrice.textContent = sideItemsList[items].price

        sideItemsContainer.append(image, sideName, sideDesc, sidePrice)
    }
}

const createBakedItems = function (bakedGoods) {
    const header = document.createElement("h1")
    header.classList.add("bakedgoods-header")
    header.textContent = "Baked Goods"
    bakedGoods.appendChild(header)

    const bakedItemsContainer = document.createElement("div")
    bakedItemsContainer.classList.add("bakedgoods-container")
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
        almondCroissant: Item(
          "Almond Croissant",
          "Light and flaky pastry filled with sweet almond paste and topped with sliced almonds.",
          "299.99 ETB"
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

    for (let items in bakedGoodsList) {
        const image = document.createElement("img")
        image.classList.add("bakedgoods-image")

        const bakedItemName = document.createElement("div")
        bakedItemName.classList.add("bakedgoods-name")
        bakedItemName.textContent = bakedGoodsList[items].name

        const bakedItemDesc = document.createElement("div")
        bakedItemDesc.classList.add("bakedgoods-description")
        bakedItemDesc.textContent = bakedGoodsList[items].description

        const bakedItemPrice = document.createElement("div")
        bakedItemPrice.classList.add("bakedgoods-price")
        bakedItemPrice.textContent = bakedGoodsList[items].price

        bakedItemsContainer.append(image, bakedItemName, bakedItemDesc, bakedItemPrice)
    }
}
