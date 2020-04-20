<template>
  <div>
    <h1>Events for {{ user.user.name }}</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link :to="{ name: 'event-list', query: {page: page - 1 } }" rel="prev">Prev Page</router-link>&nbsp;|
    </template>
    <template v-if="showNextPage">
      <router-link :to="{ name: 'event-list', query: {page: page + 1 } }">Next Page</router-link>
    </template>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState, mapActions } from 'vuex'
const PER_PAGE = 3

export default {
  components: {
    EventCard
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    showNextPage() {
      return this.event.eventsTotal > this.page * PER_PAGE
    },
    ...mapState(['event', 'user'])
  },
  methods: mapActions('event', ['fetchEvents']),
  created() {
    this.fetchEvents({
      perPage: PER_PAGE,
      page: this.page
    })
  }
}
</script>
