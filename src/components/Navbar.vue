<template>
  <div>
    <div id="nav" class="lg:text-2xl 2xl:text-3xl">
      <span class="nav-element"><router-link to="/">Home</router-link></span>
      <span class="nav-element"
        ><router-link to="/about">About</router-link></span
      >
      <span class="nav-element"
        ><router-link to="/class">Class</router-link></span
      >
      <div v-if="$route.params.chap != undefined" style="float: right">
        <!-- <span  class="nav-element"><router-link to="/subject">Temp subject(remove later)</router-link></span> -->
        <!-- <span
          class="nav-element"
          v-show="parseInt($route.params.chap)> 1"
          v-on:click="
            rout(
              '/' +
                $route.params.class +
                '/' +
                $route.params.SUB +
                '/' +
                (parseInt($route.params.chap) -1 ) +
                '/'+
                $route.params.COMP
            )
          "
          >prev</span
        > -->
        <!-- <span
          class="nav-element"
          v-show="parseInt($route.params.chap)< Object.keys(links[3]['EVS']).length -1 "
          v-on:click="
            rout(
              '/' +
                $route.params.class +
                '/' +
                $route.params.SUB +
                '/' +
                (parseInt($route.params.chap) +1 ) +
                '/'+
                $route.params.COMP
            )
          "
          >next</span> -->
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

    <!-- <button
      v-show="
        parseInt($route.params.chap) < Object.keys(links[3]['EVS']).length - 1
      "
      v-on:click="
        rout(
          '/' +
            $route.params.class +
            '/' +
            $route.params.SUB +
            '/' +
            (parseInt($route.params.chap) + 1) +
            '/' +
            $route.params.COMP
        )
      "
      v-if="$route.params.chap != undefined"
      class="mouse fixed inset-y-24 bottom-4 right-2 float-right m-auto max-h-24 rounded-full bg-red-600 shadow transition duration-200 ease-in hover:bg-red-700 focus:outline-none active:shadow-lg"
    >
      <svg
        viewBox="0 0 20 20"
        enable-background="new 0 0 20 20"
        class="inline-block h-6 w-6"
      >
        <path
          fill="#FFFFFF"
          d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
        />
      </svg>
    </button>
    <button
      v-show="parseInt($route.params.chap) > 1"
      v-on:click="
        rout(
          '/' +
            $route.params.class +
            '/' +
            $route.params.SUB +
            '/' +
            (parseInt($route.params.chap) - 1) +
            '/' +
            $route.params.COMP
        )
      "
      class="mouse fixed inset-y-24 -left-8 bottom-4 float-right m-auto max-h-24 w-10 rounded-full bg-red-600 shadow transition duration-200 ease-in hover:translate-x-9 hover:bg-red-700 focus:outline-none active:shadow-lg"
    >
      <svg
        viewBox="0 0 20 20"
        enable-background="new 0 0 20 20"
        class="inline-block h-6 w-6"
      >
        <path
          fill="#FFFFFF"
          d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
        />
      </svg>
    </button> -->
  </div>
</template>

<style>
#nav {
  position: sticky;
  top: 0;
  padding: 3vh 5vw;
  background: #012bfb;
  /* font-size: 1.2rem; */
}

#nav a {
  color: #fafafa;
  text-decoration: none;
  font-weight: bold;
}

#nav a:hover {
  text-decoration: underline;
}
#nav a.router-link-exact-active {
  color: #fb012c;
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
import links from "../assets/links.js";
export default {
  methods: {
    rout(dest) {
      router.push(dest);
    },
  },
  data: function () {
    // console.log(Object.keys(links[3]['EVS']).length); checkign the length of the chapters
    return {
      links: links,
    };
  },
  name: "Navbar",
};
</script>
