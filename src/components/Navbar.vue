<template>
  <div>
    <div id="nav">
      <span class="nav-element"><router-link to="/">Home</router-link></span>
      <span class="nav-element"
        ><router-link to="/about">About</router-link></span
      >
      <span class="nav-element"
        ><router-link to="/class">Class</router-link></span
      >
      <div v-if="$route.params.chap != undefined" style="float: right">
        <!-- <span  class="nav-element"><router-link to="/subject">Temp subject(remove later)</router-link></span> -->
        <span
          class="nav-element"
          v-on:click="
            rout(
              '/' +
                $route.params.class +
                '/' +
                $route.params.SUB +
                '/' +
                $route.params.chap +
                '/activity'
            )
          "
          >Activity Sheets</span
        >
        <span
          class="nav-element"
          v-on:click="
            rout(
              '/' +
                $route.params.class +
                '/' +
                $route.params.SUB +
                '/' +
                $route.params.chap +
                '/ar'
            )
          "
          >AR Video</span
        >
        <span
          class="nav-element"
          v-on:click="
            rout(
              '/' +
                $route.params.class +
                '/' +
                $route.params.SUB +
                '/' +
                $route.params.chap +
                '/chart'
            )
          "
          >Charts</span
        >
        <span
          class="nav-element"
          v-on:click="
            rout(
              '/' +
                $route.params.class +
                '/' +
                $route.params.SUB +
                '/' +
                $route.params.chap +
                '/ppt'
            )
          "
          >PPTs</span
        >
        <span
          class="nav-element"
          v-on:click="
            rout(
              '/' +
                $route.params.class +
                '/' +
                $route.params.SUB +
                '/' +
                $route.params.chap +
                '/video'
            )
          "
          >Videos</span
        >
      </div>
    </div>
  </div>
</template>

<style>
#nav {
  position: sticky;
  top: 0;
  padding: 3vh 5vw;
  background: #fc002a94;
}

#nav a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}

#nav a:hover {
  text-decoration: underline;
}
#nav a.router-link-exact-active {
  color: #108f56;
}

.nav-element {
  padding: 0 1vw;
  font-weight: bold;
  cursor: pointer;
}

.nav-element:hover {
  text-decoration: underline;
}
</style>

<script>
import router from "../router";

export default {
  methods: {
    rout(dest) {
      router.push(dest);
    },
  },
  name: "Navbar",
};
</script>

