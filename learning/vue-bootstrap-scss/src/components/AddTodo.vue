<template>
  <form class="form-inline" @submit.prevent="addTodo">
    <div class="form-group mb-2 mr-2">
      <input
        type="text"
        v-model="title"
        name="title"
        class="form-control"
        placeholder="Add Todo..."
      />
    </div>

    <input type="submit" value="Submit" class="btn btn-primary mb-2" />
  </form>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo() {
      const newTodo = {
        title: this.title,
        completed: false
      };
      // Send up to parent
      this.$emit("add-todo", newTodo);

      this.title = "";
    }
  }
};
</script>

<style lang="scss" scoped></style>
