<template>
  <span>
    <div class="items-center p-5">
      <nav
        style="background: #012bfb"
        class="min-h-full max-w-screen-sm rounded-2xl p-2"
      >
        <div class="flex flex-wrap justify-between">
          <div class="px-10 text-2xl text-white">
            <span class="px-2"><router-link to="/">Home</router-link></span>
            <span class="px-2"
              ><router-link to="/about">About</router-link></span
            >
            <span class="px-2">
              <router-link to="/class">Class</router-link></span
            >
          </div>

          <button
            class="rounded-md bg-black bg-opacity-20 px-4 py-2 text-lg font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-opacity-75"
          >
            aa
          </button>
        </div>
      </nav>
    </div>
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
    return {
      links: links,
    };
  },
};
</script>
