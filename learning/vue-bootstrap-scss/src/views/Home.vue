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
import axios from "axios";

export default {
  name: "Home",
  components: {
    AddTodo,
    Todos
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    deleteTodo(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => (this.todos = this.todos.filter(todo => todo.id !== id)))
        .catch(err => console.log(err));
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;

      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(res => (this.todos = [...this.todos, res.data]))
        .catch(err => console.log(err));
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => (this.todos = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style scoped></style>
