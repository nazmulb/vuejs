<template>
  <div class="p-5">
    <h4 class="page-title">Login</h4>
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
          <button type="submit" class="btn btn-primary mr-2">Login</button>
          <router-link
            as="button"
            :to="{ name: 'Signup' }"
            class="btn btn-secondary"
            >Signup</router-link
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
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
      this.$store
        .dispatch("auth/authenticate", { strategy: "local", email, password })
        .then(async () => {
          this.$router.push("/");
        })
        .catch(err => {
          // Convert the error to a plain object and add a message.
          let type = err.className;
          err = Object.assign({}, err);
          err.message =
            type === "not-authenticated"
              ? "Incorrect email or password."
              : "An error prevented login.";
          this.error = err;
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
