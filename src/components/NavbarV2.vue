<template>
  <span>
    <div class="max-w-full items-center justify-center p-5">
      <nav
        style="background: #012bfb"
        class="flex flex-wrap items-center justify-between rounded-2xl p-3"
      >
        <div class="mr-6 flex flex-shrink-0 items-center text-white">
          <div class="px-10 text-2xl text-white">
            <span class="px-2"><router-link to="/">Home</router-link></span>
            <span class="px-2"
              ><router-link to="/about">About</router-link></span
            >
            <span class="px-2">
              <router-link to="/class">Class</router-link></span
            >
          </div>
        </div>
        <span v-if="$route.params.chap != undefined">
          <ul
            class="float-right hidden space-x-1 rounded-xl bg-blue-900/20 p-1 md:flex"
            v-for="topics in Object.keys(
              links[$route.params.class][$route.params.SUB][$route.params.chap]
            )"
            :key="topics"
          >
            <router-link v-if="topics != 'name'" :to="{ path: topics }">
              <li
                :class="[
                  'w-full rounded-lg px-4 py-2 text-xl font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                ]"
              >
                {{ topics }}
              </li>
            </router-link>
          </ul>
          <ul class="felx md:hidden">
            <li class="group flex">
              temp
              <svg
                class="fill-current"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                />
              </svg>
              <ul class="bg-base-100 hidden p-2 group-hover:block">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
          </ul>
        </span>

        <!-- <button
          class="rounded-md bg-black bg-opacity-20 px-4 py-2 text-lg font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-opacity-75"
        >
          aa
        </button> -->
      </nav>
    </div>
  </span>
</template>

<script>
import router from "../router";
import links from "../assets/links.js";
console.log(links[1]["ENG"][1]);
console.log(Object.keys(links[1]["ENG"][1]));

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
