import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurant-source';

const Detail = {
    async render() {
      return `
        <h2>Detail Page</h2>
      `;
    },
   
    async afterRender() {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const restaurant = await RestaurantDbSource.detailResaturant(url.id);
      console.log(restaurant);
    },
  };
   
  export default Detail;