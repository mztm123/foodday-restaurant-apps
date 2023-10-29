import RestaurantDbSource from "../../data/restaurant-source";

const HomeList = {
    async render() {
        return`
    <div class="hero">
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
    const restaurants = await RestaurantDbSource.ListRestaurant();
    console.log(restaurants);
    },
};

export default HomeList;