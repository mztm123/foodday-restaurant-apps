

/** async function fetchData() {
    try {
        const response = await fetch('./data/DATA.json');
        const data = await response.json();
        const restaurants = data.restaurants;

        listRestaurant(restaurants);
    } catch (error) {
        console.error('Error', error);
    }
}

function listRestaurant(restaurants) {
    const list = document.getElementById('restaurant_list');

    restaurants.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.classList.add('image');
        image.src = item.pictureId;
        image.alt = item.name;

        const name = document.createElement('h2');
        name.textContent = item.name;

        const city = document.createElement('h3');
        city.textContent = item.city;

        const rating = document.createElement('h3');
        rating.textContent = item.rating;

        const description = document.createElement('p');
        description.textContent = item.description;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(city);
        card.appendChild(rating);
        card.appendChild(description);

        list.appendChild(card);
    });
}

fetchData(); 
**/

