<template>
  <div class="home">
    <div class="logos">
      <div class="img"><img src="../assets/rv.jpeg" alt="" /></div>
      <div class="img"><img src="../assets/diet.jpg" alt="" /></div>
      <div class="img"><img src="../assets/cwc.jpeg" alt="" /></div>
    </div>
    <div class="home-heading">
      <h1>A Collaboration between RVCE, DIET and CWC.</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 5vh 0;
}

.logos {
  display: flex;
  flex-direction: row;
  flex-wrap: wr;
  margin-bottom: 4vh;
  width: 100vw;
}

.img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

img {
  width: 20vw;
}
</style>