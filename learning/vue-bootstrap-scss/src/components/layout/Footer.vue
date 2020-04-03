<template>
  <footer class="myapp-footer bg-light">
    <p class="copyright text-center">
      © Copyright {{ currentYear }}. All rights reserved.
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style lang="scss" scoped>
.myapp-footer {
  .copyright {
    line-height: 3.5rem;
  }
}
</style>
