<template>
  <div>
    <h1>Create Event, {{user.name}}</h1>
    <p>This event was created by {{user.id}}</p>
    <p>There are {{catLength}} categories</p>
    <p>{{ getEventById(2) }}</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{cat}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['catLength', 'getEventById']),
    ...mapState(['categories', 'user'])
  }
}
</script>

<style>
</style>
