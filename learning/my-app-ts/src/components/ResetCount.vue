<template>
  <div>
    <button @click="$emit('reset-count', 1)">Reset Count</button>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ResetCount extends Vue {}
</script>

<style scoped lang="scss"></style>
