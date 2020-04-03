<template>
  <header class="myapp-header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
      <span class="navbar-brand">My APP</span>
      <button
        class="navbar-toggler"
        type="button"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="isCollapsed = !isCollapsed"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" class="navbar-collapse" v-show="!isCollapsed">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isCollapsed: true
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
.myapp-header {
  .router-link-exact-active {
    color: $link-active-color !important;
  }
}
</style>
