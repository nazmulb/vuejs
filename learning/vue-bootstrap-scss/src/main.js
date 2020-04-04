import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/scss/index.scss";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  const currentUser = store.state.auth.user;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next("/about");
  } else {
    next();
  }
});

// Auth first before loading the app
store
  .dispatch("auth/authenticate", {
    strategy: "local",
    email: "nazmul@gmail.com",
    password: "123"
  })
  .catch(() => {})
  // Render the app
  .then(() => {
    // eslint-disable-next-line no-new
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  });
