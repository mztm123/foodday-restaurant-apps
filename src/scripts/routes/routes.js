import HomeList from "../views/pages/home-list";
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
    '/': HomeList, //default page
    '/home-list' : HomeList,
    '/detail/:id': Detail,
    '/favorite' : Favorite,
};


export default routes;