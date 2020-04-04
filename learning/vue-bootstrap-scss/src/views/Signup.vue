<template>
  <div class="p-5">
    <h4 class="page-title">Create an Account</h4>
    <div class="row">
      <div class="col-10 col-sm-6 m-auto">
        <div
          v-if="error"
          class="alert alert-danger d-flex justify-content-between"
        >
          <span>{{ error.message }}</span>
          <a href="javascript://" @click.prevent="dismissError">dismiss</a>
        </div>

        <form
          class="form"
          method="post"
          @submit.prevent="onSubmit(email, password)"
        >
          <div class="form-group">
            <label>Email address</label>
            <input
              v-model="email"
              type="email"
              name="email"
              placeholder="email"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              v-model="password"
              type="password"
              name="password"
              placeholder="password"
              class="form-control"
            />
          </div>
          <button type="submit" class="btn btn-primary mr-2">Signup</button>
          <router-link
            as="button"
            :to="{ name: 'Login' }"
            class="btn btn-secondary"
            >Login</router-link
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    dismissError() {
      this.error = null;
    },
    onSubmit(email, password) {
      this.dismissError();

      const { User } = this.$FeathersVuex.api;

      new User({ email, password })
        .save()
        .then(() => {
          this.$router.push("/login");
        })
        // Just use the returned error instead of mapping it from the store.
        .catch(err => {
          // Convert the error to a plain object and add a message.
          let type = err.name;
          err = Object.assign({}, err);
          err.message =
            type === "Conflict"
              ? "That email address is unavailable."
              : "An error prevented signup.";
          this.error = err;
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
