import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `

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

    // eslint-disable-next-line no-shadow
    restaurant.forEach((restaurant) => {
      RestaurantListContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
