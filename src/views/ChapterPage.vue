<template >
  <div class="wrapper">
  <!-- <div>aaa</div> -->
    <div class="component" v-if="links[$route.params.class][$route.params.SUB][$route.params.chap][$route.params.COMP].length==0"> 
      <span class="text-5xl">This chapter/topic is yet to be coverd</span>
    </div>
    <div
      class="component"
      v-bind:style="{
        backgroundColor:
          links[$route.params.class][$route.params.SUB]['colour'],
      }"
      v-for="aa in links[$route.params.class][$route.params.SUB][$route.params.chap][$route.params.COMP]"
      :key="aa"
    >
      <span v-if="aa.title == ''">{{links[$route.params.class][$route.params.SUB][$route.params.chap]['name']}}</span>
      <span v-else>Chapter {{ aa["title"] }}</span> 
      
      <div v-html="aa['link']"></div>
      <span v-if="aa.description == undefined">
        Class {{ $route.params.class }} Subject {{ $route.params.SUB }} Chapter
        {{ $route.params.chap }} -
        {{ aa["type"] }}
      </span>
      <span v-else>{{ aa["description"] }}</span>
    </div>
  </div>
  <!-- </div> -->
</template>



<script>
import links from "../assets/links.js";
import router from "../router";

export default {
  methods: {
    rout(dest) {
      router.push(dest);
    },
  },
  data: function () {
    return { links };
  },
};
</script>



<style>
:root {
  --clr-primary: #12e7c0;
  --clr-graylight: #f3f3f3;
  --clr-graymed: #c4c4c4;
  --border-radius: 2rem;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.wrapper {
  counter-reset: number;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
}

.navbar-container {
  max-width: 10rem;
  flex: 1 0 10%;
  background-color: red;
}
.chapter-page {
  display: flex;
  overflow: auto;
  height: 100%;
}

.man {
  padding: 2rem;
  width: 90%;
  /*  margin: 0 1rem 4rem; */
  background: white;
  text-align: center;
  justify-content: center;
}

.component {
  box-shadow: 0px 0px 20px var(--clr-graymed);
  border-radius: var(--border-radius);
  padding: 1rem;
  margin: 1rem 0 1rem 0;
  background: white;
  text-align: center;
  width: 60%;
  max-width: 70%;
  height: fit-content;
}

.component > div {
  position: relative;
  padding-bottom: 75%;
  height: 0px;
}

.component iframe {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
</style>