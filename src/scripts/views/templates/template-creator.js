import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="restaurant_title">${restaurant.name}</h2>
    <img class="restaurant_poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant_info">
    <h3>Information</h3>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    </div>
    <div class="restaurant_description">
        <h3>Deskripsi Restaurant</h3>
        <p>${restaurant.description}</p>
    </div>
`;

const createRestaurantItemTemplate = (restaurants) => `
    <div class="restaurant-item">
        <div class="restaurant-item_header">
            <img class="restaurant-item_header_poster" alt="${restaurants.name}"
           src="${restaurants.pictureId ? CONFIG.BASE_IMAGE_URL + restaurants.pictureId : 'https://picsum.photos/id/666/800/450?grayscale' }">
            <div class="restaurant-item_header_rating_score">
                <p>⭐️<span class="restaurant-item_header_rating_score">${restaurants.rating}</span></p>
            </div>
        </div>
        <div class="restaurant-item_content">
            <h3><a href="/#?detail/${restaurants.id}">${restaurants.name}</a>"</h3>
            <p>${restaurants.description}</p>
        </div>
    </div>
    `;
    
export {
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate
}