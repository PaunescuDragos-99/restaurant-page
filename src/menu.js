import "./menu.css";

const menuLoad = () => {   

    const menuData = [
        {
            name:"Pizza Prosciutto 0",
            price: "20$",
            description: "chesse, prosciutto crudo, tomato sauce"
        },
        {
            name:"Pizza Prosciutto 1",
            price: "20$",
            description: "chesse, prosciutto crudo, tomato sauce"
        },
        {
            name:"Pizza Prosciutto 2",
            price: "20$",
            description: "chesse, prosciutto crudo, tomato sauce"
        },
        {
            name:"Pizza Prosciutto 3",
            price: "20$",
            description: "chesse, prosciutto crudo, tomato sauce"
        },
        {
            name:"Pizza Prosciutto 3",
            price: "20$",
            description: "chesse, prosciutto crudo, tomato sauce"
        },
        {
            name:"Pizza Prosciutto 3",
            price: "20$",
            description: "chesse, prosciutto crudo, tomato sauce"
        }
    ];

    const pageContent = document.querySelector(".page-content");
    const menuContent = document.createElement("div");
    menuContent.classList.add("menu-content");
    pageContent.appendChild(menuContent);

    menuData.forEach(pizza => {
        const itemPizza = document.createElement("div");
        itemPizza.classList.add("item-pizza");
        menuContent.appendChild(itemPizza);

        const pizzaName = document.createElement("p");
        pizzaName.innerText = pizza.name;
        const pizzaDescription = document.createElement("p");
        pizzaDescription.innerText = pizza.description;
        const pizzaPrice = document.createElement("p");
        pizzaPrice.innerText = pizza.price;

        itemPizza.appendChild(pizzaName);
        itemPizza.appendChild(pizzaDescription);
        itemPizza.appendChild(pizzaPrice);

    });
    

}


export {menuLoad};