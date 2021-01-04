<template>
  <div class="form-wrapper">
    <h2>Login to your Account</h2>
    <p>Enter your details to login.</p>
    <form @submit.prevent="saveData">
      <div>
        <label for="user-email">Email Address</label>
        <input
          class="input-group"
          type="email"
          name="user-email"
          id="user-email"
          placeholder="Enter Your Email"
          v-model.trim="$store.state.userEmail"
        />
      </div>
      <div>
        <label for="user-password">Password</label>
        <input
          class="input-group"
          type="password"
          name="user-password"
          id="user-password"
          placeholder="Enter Password"
          v-model.trim="$store.state.userPassword"
        />
      </div>
      <div>
        <input
          class="checkbox-control"
          type="checkbox"
          name="rememeber-me"
          id="remember-me"
          v-model="$store.state.rememberMe"
        />
        <label class="checkbox-label" for="remember-me">Remember Me</label>
      </div>
      <button type="submit">Login</button>
    </form>
    <p class="account">
      By clicking login, you agree to our <a href="#">Terms & Conditions!</a>
    </p>
    <p class="account">Dont have an account? <a href="#">Register here</a></p>
  </div>
</template>

<script>
export default {
  methods: {
    saveData() {
      return this.$store.commit("saveData");
    },
  },
};
</script>

<style scoped>
.form-wrapper {
  flex: 50%;
  padding: 3rem;
}

label {
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 1px;
  color: #000;
}

input[type="Password"],
input[type="email"] {
  font-size: 15px;
  color: #333;
  letter-spacing: 1px;
  padding: 14px 10px;
  width: 93%;
  display: inline-block;
  box-sizing: border-box;
  border: none;
  outline: none;
  background: transparent;
  font-family: "Raleway", sans-serif;
}

.input-group {
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd !important;
  background: #fff !important;
}

.checkbox-control {
  margin-bottom: 20px;
}

.checkbox-label {
  margin-left: 10px;
  text-transform: none !important;
}

h2 {
  display: inline-block;
  font-size: 26px;
  margin-bottom: 10px;
  color: #333;
  letter-spacing: 2px;
  text-transform: capitalize;
}

p {
  padding-bottom: 30px;
}

p.alert {
  margin-top: 5px;
  color: red;
  font-weight: 800 !important;
}

.invalid-input {
  border: red !important;
}

button {
  background: #ff4040;
  border: none;
  color: #fff;
  font-size: 13px;
  padding: 12px 40px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
}

p.account {
  padding-top: 20px;
  padding-bottom: 0px;
  line-height: 1rem;
  font-size: 13px;
}

p.account a {
  color: #ff4040;
  font-size: 11px;
  text-decoration: underline;
}

p.account a:hover {
  text-decoration: none;
}

/* Media Query */
@media (max-width: 1050px) {
  .form-wrapper {
    display: block;
    overflow: hidden;
    padding: 4rem 0 0 0;
    width: 90%;
    margin: auto 3rem auto 3rem;
  }
}

@media (max-width: 500px) {
  .form-wrapper {
    display: block;
    overflow: hidden;
    padding: 4rem 0 0 0;
    margin: auto;
  }
}
</style>