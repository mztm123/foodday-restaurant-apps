import RestaurantDbSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const HomeList = {
  async render() {
    return `
    <div class="hero">
      <picture>
        <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
        <img src='./images/heros/hero-image_2-large.jpg' 
        alt="foodday lorem ipsum dolor sit amet">
      </picture>
      <div class="hero_inner">
        <h1 class="hero_title">FOODDAY</h1>
          <p class="hero_tagline">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos alias dolor repudiandae quod, enim voluptas rem iste error. Dicta aut accusamus ipsum commodi accusantium laboriosam sed totam perspiciatis voluptatibus.
          </p>
        <a  href="#explore" <button class="headline_button"> EXPLORE </button> </a>
      </div>
    </div>

  
    <section class="content">
      <h1 id="explore" class="restaurant_list_title">Explore Restaurants</h1>
        <div class="restaurant_list" id="restaurant_list">
        </div>
    </section>
        `;
  },

  async afterRender() {
    const RestaurantList = await RestaurantDbSource.ListRestaurant();
    const RestaurantListContainer = document.querySelector('#restaurant_list');
    RestaurantList.forEach((restaurants) => {
      RestaurantListContainer.innerHTML += createRestaurantItemTemplate(restaurants);
    });
  },
};

export default HomeList;
