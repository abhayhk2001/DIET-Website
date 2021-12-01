<template>
    <div id="nav">
      <span class="nav-element"><router-link to="/">Home</router-link></span>  
      <span class="nav-element"><router-link to="/about">About</router-link></span>  
      <span class="nav-element"><router-link to="/class">Class</router-link></span>  
      <span class="nav-element"><router-link to="/subject">Temp subject(remove later)</router-link></span>  
    </div>
</template>

<style> 

#nav {
  position: sticky;
  top: 0;
  padding: 3vh 5vw;
  background: #92B1ED 
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav-element{
  padding: 0 1vw
}
</style>

<script>
export default ({
  name : 'Navbar'
})
</script>

