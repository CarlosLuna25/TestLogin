import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Notfound from "../components/NotFound.vue"
import Login from "../views/Login.vue"
import Store from "../store/index.js"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    },
  },
  {//en caso de rutas no existentes
    path:"*",
    name:"Notfound",
    component: Notfound
  },
  {
    path: "/login",
    name: "login",

    component:Login, 

  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let User= JSON.parse(window.localStorage.getItem('currentUser'));
    if (User!=undefined) {   // para verificar si hay una session activa cuando se recargue la pagina
      Store.state.isLogged=true;
      Store.dispatch('SetUserInfo', User);}
    if (Store.state.islogged) {
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }
});

export default router;

