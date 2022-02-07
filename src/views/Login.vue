<template>
  <div class="container flex flex-col justify-center items-center mx-auto">
    <h1>Login View</h1>
    <h2 v-if="isLoggedIn">{{ getUsername }}</h2>
    <h2 v-else>Please Login</h2>
    <div class="w-full max-w-xs">
      <form
        @submit.prevent="
          setUser({ username: usernameText, password: passwordText })
        "
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            v-model="usernameText"
            placeholder="Username"
            required
          />
          <p v-if="!usernameText" class="text-red-500 text-xs italic">
            Please enter your username.
          </p>
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            v-model="passwordText"
            type="password"
            required
            placeholder="enter your password"
          />
          <p v-if="!passwordText" class="text-red-500 text-xs italic">
            Please enter your password.
          </p>
        </div>
        <div class="flex items-center justify-between">
          <PrimaryButton buttonText="Login" />
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
            @click="handleForgotPassword"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">&copy;2022 Tora-Pan.</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PrimaryButton from "../components/buttons/PrimaryButton.vue";

export default {
  name: "Login",
  data() {
    return {
      usernameText: "",
      passwordText: "",
    };
  },
  components: {
    PrimaryButton,
  },
  methods: {
    ...mapActions(["setUser"]),
    handleSubmit() {
      //   console.log(this.usernameText, this.passwordText);
    },
    handleForgotPassword() {
      console.log(this.$store.state.userAuth.username);
    },
  },
  computed: {
    ...mapGetters(["isLoggedIn", "getUsername"]),
  },
};
</script>
