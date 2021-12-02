<template>
  <div id="nav">
    <span class="nav-element"><router-link to="/">Home</router-link></span>
    <span class="nav-element"
      ><router-link to="/about">About</router-link></span
    >
    <span class="nav-element"
      ><router-link to="/class">Class</router-link></span
    >
    <span class="nav-element"
      ><router-link to="/subject">Temp subject(remove later)</router-link></span
    >
  </div>
</template>

<style>
#nav {
  position: sticky;
  top: 0;
  padding: 3vh 5vw;
  background: #92b1ed;
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
}
</style>

<script>
export default {
  name: "Navbar",
};
</script>

