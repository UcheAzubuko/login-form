import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

const store = createStore({
  state() {
    return {
      userEmail: null,
      userPassword: null,
      rememberMe: null,
      invalidInput: false,
    };
  },
  mutations: {
    saveData(state) {
      if (
        state.userEmail === "" ||
        state.userPassword === "" ||
        state.rememberMe === false
      ) {
        state.invalidInput = true;
        return;
      }

      state.invalidInput = false;

      state.userEmail = "";
      state.userPassword = "";
      state.rememberMe = false;
    },
    confirmError(state) {
      state.invalidInput = false;
    },
  },
  getters: {
    userIsValid(state) {
      return state.invalidInput;
    },
  },
});

const app = createApp(App);

app.use(store);
app.mount("#app");
