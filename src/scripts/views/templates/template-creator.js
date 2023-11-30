/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `

    <img class="restaurant_poster" crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant_info">
        <h2 class="restaurant_title">${restaurant.name}</h2>
        <p>⭐️<span class="restaurant-item_header_rating_score">${restaurant.rating}</span></p>
        <h4>Kota</h4>
        <p>${restaurant.city}</p>
        <h4>Alamat</h4>
        <p>${restaurant.address}</p>
    </div>
    <div class="restaurant_description">
        <h3>Deskripsi Restaurant</h3>
        <p>${restaurant.description}</p>
    </div>
    <div class="menu">
        <div class="menu-title"> <h3>Menu</h3> </div>
        <div class="menu-foods">
            <h3>Foods</h3>
                <div class="list">
                ${restaurant.menus.foods.map((food) => `
                <div class="food">
                    <li>${food.name}</li>
                </div>
                `).join('')}
                </div>
        </div>
        <div class="menu-drinks">
            <h3>Drinks</h3>
                <div class="list">
                ${restaurant.menus.drinks.map((drink) => `
                <div class="drink">
                    <li>${drink.name}</li>
                </div>
                `).join('')}
                </div>
        </div>
    </div>
    <div class="review">
        <h3> Review</h3>
        ${restaurant.customerReviews.map((review) => `
        <div class="review-item">
            <h4>${review.name}</h4>
            <i>
                <p class="date-review">${review.date}</p>
            </i>
            
            <div class="body-review">${review.review}</div>
        </div>
        `).join('')}
    </div>
`;

const createRestaurantItemTemplate = (restaurants) => `
    <div class="restaurant-item">
        <div class="restaurant-item_header">
            <div class="restaurant-item_header_rating">
             <p>⭐️<span class="restaurant-item_header_rating_score">${restaurants.rating}</span></p>
            </div>
           <div  class="restaurant-item_header_poster">
            <img class="lazyload" crossorigin="anonymous" alt="${restaurants.name}"
            data-src="${restaurants.pictureId ? CONFIG.BASE_IMAGE_URL + restaurants.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
           </div>
        </div>
        <div class="restaurant-item_content">
            <h3 class="restaurant-title"><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h3>
            <h4><span><i class="fa-solid fa-location-dot"></i></span>${restaurants.city}</h4>
            <p>${restaurants.description}</p>  
        </div>
    </div>
    `;

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  `;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
