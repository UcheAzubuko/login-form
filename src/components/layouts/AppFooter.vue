<template>
  <div>
    <p>{{ info }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: "2020 Login Form. All Rights Reserved | by Uche Azubuko",
    };
  },
};
</script>

<style scoped>
div {
  text-align: center;
}

p {
  color: #666;
  text-align: center;
  letter-spacing: 1px;
  font-size: 15px;
  margin-top: 3rem;
}

/* Media Query */
@media (max-width: 1050px) {
  p {
    font-size: 15px;
    display: block;
    overflow: hidden;
  }
}

@media (max-width: 500px) {
  p {
    font-size: 13px;
    display: block;
    overflow: hidden;
  }
}
</style>