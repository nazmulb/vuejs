<template>
  <div id="app" class="container-fluid px-1 px-sm-3 px-md-5">
    <Header />

    <main class="myapp-main">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style></style>
