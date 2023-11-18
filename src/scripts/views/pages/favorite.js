/* eslint-disable eqeqeq */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `

    <section class="content">
      <h1 id="explore" class="restaurant_list_title">Your Favorite Restaurant</h1>
        <div class="restaurant_list" id="restaurant_list">
        </div>
      <div class="no-favorite-restaurant">
        <p id="no-favorite-message" class="restaurant-item__not__found"></p>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    const RestaurantListContainer = document.querySelector('#restaurant_list');
    const noFavoriteMessage = document.querySelector('#no-favorite-message');
    RestaurantListContainer.innerHTML = '';

    if (restaurant.length == 0) {
      noFavoriteMessage.textContent = 'Tidak ada restaurant untuk ditampilkan';
    } else {
      noFavoriteMessage.computedStyleMap.display = 'none';

      restaurant.forEach((restaurant) => {
        RestaurantListContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
