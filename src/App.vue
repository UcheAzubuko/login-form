<template>
  <base-dialog v-if="userIsValid"></base-dialog>
  <div class="container">
    <div class="main-content">
      <app-info class="app-info"></app-info>
      <app-form class="app-form"></app-form>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from "@/components/layouts/AppFooter.vue";
import AppInfo from "@/components/layouts/AppInfo.vue";
import AppForm from "@/components/layouts/AppForm.vue";
import BaseDialog from "@/components/UI/BaseDialog.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    AppFooter,
    AppInfo,
    AppForm,
    BaseDialog,
  },
  computed: {
    ...mapGetters(["userIsValid"]),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: "Raleway", sans-serif;
}

body {
  min-height: 100vh;
  background: linear-gradient(to left, #f5f5f5 50%, #fff 50%);
}

ul {
  list-style: none;
}

img {
  width: 100%;
}

a {
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 15px;
  font-weight: 600;
  outline: none;
}

a:hover {
  text-decoration: none;
}

a:focus,
a:hover {
  text-decoration: none;
}

input[type="button"],
input[type="submit"] {
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
  letter-spacing: 1px;
}

p {
  color: #666;
  letter-spacing: 1px;
  line-height: 1.8rem;
  font-size: 16px;
  font-weight: 400;
}

/* Utility */
.container {
  width: 75%;
  margin: 0 auto;
  padding: 1rem 0;
  overflow: hidden;
}

.main-content {
  display: flex;
  flex-direction: row;
}

/* Media Query */
@media (max-width: 1050px) {
  body {
    background: #fff;
  }

  .container {
    width: 90%;
  }

  .main-content {
    display: flex;
    flex-direction: column;
  }
}
</style>
