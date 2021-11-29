<template>
  <div id="app">
    <Navbar/>
    <div class="main-content">
      <router-view />
    </div>
    <Footer/>
  </div>
</template>

<style>
  html , body {
    font-family: "Playfair Display", serif;
    background: var(--clr-graylight);
    min-height: 100vh;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
}


.main-content{
  flex:1 0 auto;
}
</style>

<script>
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>