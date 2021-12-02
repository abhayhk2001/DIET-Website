<template >
  <div class="wrapper">
    <!-- <div class="navbar-container">
      <div class="heading"><h1>Chapter Sections</h1></div>
      <div v-on:click="rout('/' + $route.params.class + '/' + $route.params.SUB + '/' + $route.params.chap+'/activity')">Activity Sheets</div>
      <div v-on:click="rout('/' + $route.params.class + '/' + $route.params.SUB + '/' + $route.params.chap+'/ar')">AR Video</div>
      <div v-on:click="rout('/' + $route.params.class + '/' + $route.params.SUB + '/' + $route.params.chap+'/chart')">Charts</div>
      <div v-on:click="rout('/' + $route.params.class + '/' + $route.params.SUB + '/' + $route.params.chap+'/ppt')">PPTs</div>
      <div v-on:click="rout('/' + $route.params.class + '/' + $route.params.SUB + '/' + $route.params.chap+'/video')">Videos</div>
    </div> -->
    <!-- <div class="man wrapper"> -->
      <div
        class="component"
        v-on:click="
          rout('/' + $route.params.class + '/' + $route.params.SUB + '/' + aa)
        "
        v-for="aa in links[$route.params.class][$route.params.SUB][
          $route.params.chap
        ][$route.params.COMP]"
        :key="aa"
      >
        Chapter {{ aa["title"] }}
        <div v-html="aa['link']"></div>
        <div v-if="aa.description == undefined">
          Class {{ $route.params.class }} Subject
          {{ $route.params.SUB }} Chapter {{ $route.params.chap }} -
          {{ aa["type"] }}
        </div>
        <div v-else>{{ aa["description"] }}</div>
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
  width: 53%;
  height: fit-content;
  
}

/* .auto-resizable-iframe {
  max-width:50%;
  max-height: 70rem;
  margin: 0px auto;
}

.auto-resizable-iframe > div {
  position: relative;
  padding-bottom: 75%;
  height: 0px;
}

.auto-resizable-iframe iframe {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
} */
</style>