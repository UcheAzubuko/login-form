<template>
  <teleport to="body">
    <div></div>
    <dialog open>
      <header>
        <h2>Invalid Input</h2>
      </header>
      <section>
        <p>Unfortunately, at least one input value is invalid.</p>
        <p>
          Please check all inputs and make sure you entered appropriate values.
        </p>
      </section>
      <menu>
        <button @click="confirmError">Okay</button>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
export default {
  methods: {
    confirmError() {
      return this.$store.commit("confirmError");
    },
  },
};
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: hidden;
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

header {
  background-color: #ff4040;
  color: white;
  width: 100%;
  padding: 1rem;
}

section {
  padding: 1rem;
}

p {
  font-size: 0.9rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>