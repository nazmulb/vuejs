<template>
  <div class="p-5">
    <h4 class="page-title">Todos</h4>
    <AddTodo @add-todo="addTodo" />
    <Todos :todos="todos" @del-todo="deleteTodo" />
  </div>
</template>

<script>
// @ is an alias to /src
import AddTodo from "@/components/AddTodo.vue";
import Todos from "@/components/Todos.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    AddTodo,
    Todos
  },
  computed: {
    ...mapGetters("todos", {
      findTodosInStore: "find"
    }),
    todos() {
      return this.findTodosInStore({ query: {} }).data;
    }
  },
  methods: {
    ...mapActions("todos", {
      findTodos: "find"
    }),
    addTodo(newTodo) {
      const { Todo } = this.$FeathersVuex.api;

      new Todo(newTodo)
        .save()
        .then(() => {})
        .catch(err => console.log(err));
    },
    deleteTodo(id) {
      const { Todo } = this.$FeathersVuex.api;
      Todo.get(id).then(todo => {
        todo.remove();
      });
    }
  },
  created() {
    this.findTodos({ query: {} });
  }
};
</script>

<style lang="scss" scoped></style>
