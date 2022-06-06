<template>
  <span>
    <!-- left -->
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
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
      >
        <path
          fill="#FFFFFF"
          d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"
        />
      </svg>
    </button>
    <!-- right -->
    <!-- class="mouse fixed inset-y-24 bottom-4 right-2 float-right m-auto max-h-24 rounded-full bg-red-600 shadow transition duration-200 ease-in hover:bg-red-700 focus:outline-none active:shadow-lg" -->

    <button
      v-show="
        parseInt($route.params.chap) <
        Object.keys(links[$route.params.class][$route.params.SUB]).length - 1
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
      class="mouse fixed inset-y-24 -right-8 bottom-4 float-right m-auto max-h-24 w-10 rounded-full bg-red-600 shadow transition duration-200 ease-in hover:-translate-x-9 hover:bg-red-700 focus:outline-none active:shadow-lg"
      v-if="$route.params.chap != undefined"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
      >
        <path
          fill="#FFFFFF"
          d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
        />
      </svg>
    </button>
  </span>
</template>

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
  name: "Pagenav",
};
</script>
