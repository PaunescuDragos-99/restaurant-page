import './home.css';

const homeLoad = () => {
    const pageContent = document.querySelector(".page-content");

    const restaurantContent = document.createElement("div");
    restaurantContent.className = "restaurant-content";
    
    const headerDiv = document.createElement("div");
    const header = document.createElement("h1");
    header.innerText = "Welcome to BestoPizza";

    const imageRestaurantDiv = document.createElement("div");
    const imageRestaurant = document.createElement("img");
    imageRestaurant.classList.add("image-home");
    imageRestaurant.setAttribute('alt', 'image-restaurant');
    imageRestaurant.setAttribute('src','../assets/pizza-restaurant.jpg');


    pageContent.appendChild(headerDiv);
    pageContent.appendChild(restaurantContent);
    headerDiv.appendChild(header);
    restaurantContent.appendChild(imageRestaurantDiv);
    imageRestaurantDiv.appendChild(imageRestaurant);
};

export {homeLoad};