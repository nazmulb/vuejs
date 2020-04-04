<template>
  <div>
    <ul class="list-group" v-for="(todo, index) in todos" :key="index">
      <li class="list-group-item" :class="{ 'is-complete': todo.completed }">
        <input
          type="checkbox"
          @change="markComplete(todo)"
          :checked="todo.completed"
        />
        {{ todo.title }}
        <button
          @click="$emit('del-todo', todo._id)"
          class="btn btn-sm btn-danger py-0"
        >
          x
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Todos",
  props: ["todos"],
  methods: {
    markComplete(todo) {
      todo.completed = !todo.completed;
      todo.update();
    }
  }
};
</script>

<style lang="scss" scoped>
.is-complete {
  text-decoration: line-through;
}
</style>
