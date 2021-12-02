<template >
  <div class="chapter-page">
    <div class="navbar-container">
      <div class="heading"><h1>Chapter Sections</h1></div>
      <div class="section1">Activity Sheets</div>
      <div class="section2">AR Video</div>
      <div class="section3">Charts</div>
      <div class="section4">PPTs</div>
      <div class="section5">Videos</div>
    </div>
    <div class="main">
        <div
          class="subject"
          v-on:click="
            rout('/' + $route.params.class + '/' + $route.params.SUB + '/' + a)
          "
          v-for="a in links[$route.params.class][$route.params.SUB][$route.params.chap][$route.params.COMP]"
          :key="a"
        >
          Chapter {{ a['title'] }}
          <div v-html="a['link']"></div>

          dvi
          Class __ Subject __ Chapter __ Video  
        </div>


    </div>
  </div>
</template>



<script>
import links from "../links.js";

export default {
  data: function () {

    return {links};
  },
  
};
</script>



<style>
body {
  overflow: hidden;
  height: 100vh;
}
main {
  overflow-y: auto;
}
.navbar-container {
  max-width: 10rem;
  flex: 1 0 10%;
  background-color: red;
}
.chapter-page {
  display: flex;
  height: 100%;
}

.wrapper {
  counter-reset: number;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
}

.Grade {
  box-shadow: 0px 0px 20px var(--clr-graymed);
  border-radius: var(--border-radius);
  padding: 2rem;
  width: 90%;
  margin: 0 1rem 4rem;
  background: white;
  text-align: center;
}

.subject {
  box-shadow: 0px 0px 20px var(--clr-graymed);
  border-radius: var(--border-radius);
  padding: 1rem;
  width: 100%;
  margin: 1rem 0 1rem 0;
  background: white;
  text-align: center;
}
</style>