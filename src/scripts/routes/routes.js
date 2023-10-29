import HomeList from "../views/pages/home-list";
import Detail from '../views/pages/detail';

const routes = {
    '/': HomeList, //default page
    '/home-list' : HomeList,
    '/detail/:id': Detail,
};


export default routes;