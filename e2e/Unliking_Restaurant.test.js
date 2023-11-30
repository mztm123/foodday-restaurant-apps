const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  
  I.seeElement('.restaurant-title a');
  const firstRestaurant = locate('.restaurant-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
 
  I.waitForElement('#likeButton', 5);
  I.click('#likeButton');
  
  I.amOnPage('/#/favorite');
  
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  I.click(firstRestaurant);
  
  I.waitForElement('#likeButton', 5);
  I.click('#likeButton');
  
  I.amOnPage('/');
  
  I.amOnPage('/#/favorite');
  
  I.dontSeeElement('.restaurant-item');
  I.waitForElement('.restaurant-item__not__found', 5);
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});