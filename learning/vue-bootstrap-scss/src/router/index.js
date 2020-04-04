import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import store from "../store";

Vue.use(VueRouter);

const isLoggedIn = (to, from, next) => {
  store
    .dispatch("auth/authenticate")
    .then(() => {
      next();
    })
    .catch(() => {
      next("/login");
    });
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: isLoggedIn
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
    beforeEnter: isLoggedIn
  },
  {
    path: "/todos",
    name: "Todos",
    component: () => import("../views/Todos.vue"),
    beforeEnter: isLoggedIn
  }
];

const router = new VueRouter({
  routes
});

export default router;
