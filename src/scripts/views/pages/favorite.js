import FavoriteRestaurantIdb from "../../data/restaurant-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Favorite = {
    async render() {
        return`

    <section class="content">
      <h1 id="explore" class="restaurant_list_title">Your Favorite Restaurant</h1>
        <div class="restaurant_list" id="restaurant_list">
        </div>
    </section>
        `;
    },

    async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    const RestaurantListContainer = document.querySelector('#restaurant_list');
    RestaurantListContainer.innerHTML = '';
    
    restaurant.forEach((restaurant) => {
    RestaurantListContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    },
};

export default Favorite;