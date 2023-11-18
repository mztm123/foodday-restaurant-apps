const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('unliking one restaurant', async ({ I }) => {
  // Go to the home page
  I.amOnPage('/');
  
  //   Check if there are any restaurants to display
//   const noRestaurantMessage = 'Tidak ada restaurant untuk ditampilkan';
//   I.see(noRestaurantMessage, '.restaurant-item__not__found');
  
  // Select the first restaurant on the home page
  I.seeElement('.restaurant-title a');
  const firstRestaurant = locate('.restaurant-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  
  // Like the selected restaurant
  I.waitForElement('#likeButton', 5);
  I.click('#likeButton');
  
  // Go to the favorites page
  I.amOnPage('/#/favorite');
  
  // Check if the liked restaurant is displayed on the favorites page
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  
  // Unlike the restaurant
  I.waitForElement('#likeButton', 5);
  I.click('#likeButton');
  
  // Go back to the home page
  I.amOnPage('/');
  
  // Go to the favorites page again to ensure the restaurant is unliked
  I.amOnPage('/#/favorite');
  
  // Check if the unliked restaurant is no longer displayed on the favorites page
  I.dontSeeElement('.restaurant-item');
  I.waitForElement('.restaurant-item__not__found', 5);
  I.see(noRestaurantMessage, '.restaurant-item__not__found');
});