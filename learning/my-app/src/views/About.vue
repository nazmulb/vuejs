<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      Kilometers:
      <input type="text" v-model="kilometers" />
      Meters:
      <input type="text" v-model="meters" />
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kilometers: 0,
      meters: 0
    };
  },
  watch: {
    kilometers: function(val) {
      this.kilometers = val;
      this.meters = val * 1000;
    },
    meters: function(val) {
      this.kilometers = val / 1000;
      this.meters = val;
    }
  }
};
</script>
