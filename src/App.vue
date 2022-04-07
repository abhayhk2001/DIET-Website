<template>
  <div id="app">
    <Navbar />
    <!-- <NavbarV2 /> -->
    <div class="main-content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style>
html,
body {
  font-family: "Playfair Display", serif;
  background: var(--clr-graylight);
  min-height: 100vh;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0000008a;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1 0 auto;
  /* background-image: url("./assets/background.svg");
  background-repeat: no-repeat;
  background-attachment: fixed; */
}
</style>

<script>
import Navbar from "@/components/Navbar.vue";
// import NavbarV2 from "@/components/NavbarV2.vue";

import Footer from "@/components/Footer.vue";
import "./output.css";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    // NavbarV2,
  },
};
</script>
