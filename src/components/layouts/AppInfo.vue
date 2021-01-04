<template>
  <div class="app-info">
    <h1>Manage Your Business Account</h1>
    <p>
      Donec dictum nisl nec mi lacinia, sed maximus tellus eleifend. Proin
      molestie cursus sapien ac eleifend.
    </p>
    <img src="@/assets/images/image.jpg" alt="" />
  </div>
</template>

<style scoped>
.app-info {
  flex: 50%;
  padding-right: 3rem;
}

h1 {
  font-size: 40px;
  margin: 2.5rem 0rem 0.5rem 0rem;
  color: #333;
}

/* Media Query */
@media (max-width: 1050px) {
  .app-info {
    display: block;
    overflow: hidden;
    padding-right: 0;
    width: 90%;
    margin: auto;
  }

  h1 {
    font-size: 30px;
  }
}

@media (max-width: 500px) {
  .app-info {
    display: block;
    overflow: hidden;
    padding-right: 0;
    margin: auto;
  }

  h1 {
    font-size: 30px;
  }
}
</style>