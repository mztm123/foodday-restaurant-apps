/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
class FavoriteRestaurantSearchPresenter {
  constructor({ favoriteRestaurants }) {
    this._listenToSearchRequestByUser();
    this._favoriteRestaurants = favoriteRestaurants;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById('query');
    this._queryElement.addEventListener('change', (event) => {
      this._searchRestaurants(event.target.value);
    });
  }

  _searchRestaurants(latestQuery) {
    this._latestQuery = latestQuery;
    this._favoriteRestaurants.searchRestaurants(this.latestQuery);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}
// eslint-disable-next-line no-trailing-spaces
   
export default FavoriteRestaurantSearchPresenter;