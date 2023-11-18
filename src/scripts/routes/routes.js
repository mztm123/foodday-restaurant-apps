/* eslint-disable import/no-named-as-default */
import HomeList from '../views/pages/home-list';
import Detail from '../views/pages/detail';
// eslint-disable-next-line import/no-named-as-default-member
import Favorite from '../views/pages/favorite';

const routes = {
  '/': HomeList, // default page
  '/home-list': HomeList,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
