import Home from "../pages/Home/Home";
import Admin from "../pages/Admin/Admin";

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/admin', component: Admin},
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}