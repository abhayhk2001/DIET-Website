<template>
  <span>
    <div class="max-w-full items-center justify-center p-5">
      <nav
        style="background: #012bfb"
        class="flex flex-wrap items-center justify-between rounded-2xl p-3"
      >
        <div class="mr-6 flex flex-shrink-0 items-center text-white">
          <div class="px-5 text-2xl text-white">
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
            class="float-right hidden space-x-1 rounded-xl p-1 md:flex"
            v-for="topics in Object.keys(
              links[$route.params.class][$route.params.SUB][$route.params.chap]
            )"
            :key="topics"
          >
            <router-link v-if="topics != 'name'" :to="{ path: topics }">
              <li
                class="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-base font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                {{ topics }}
              </li>
            </router-link>
          </ul>
          <span class="flex md:hidden">
            <!-- delete this later -->
            <div class="text-right">
              <Menu as="div" class="relative inline-block text-left">
                <div>
                  <MenuButton
                    class="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-base font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                  >
                    Topics
                  </MenuButton>
                </div>

                <transition
                  enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div
                      class="px-1 py-1"
                      v-for="topics in Object.keys(
                        links[$route.params.class][$route.params.SUB][
                          $route.params.chap
                        ]
                      )"
                      :key="topics"
                    >
                      <router-link
                        v-if="topics != 'name'"
                        :to="{ path: topics }"
                      >
                        <MenuItem v-slot="{ active }">
                          <button
                            :class="[
                              active
                                ? 'bg-violet-500 text-white'
                                : 'text-gray-900',
                              'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                            ]"
                          >
                            {{ topics }}
                          </button>
                        </MenuItem>
                      </router-link>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </span>
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
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
console.log(links[1]["ENG"][1]);
console.log(Object.keys(links[1]["ENG"][1]));

export default {
  methods: {
    rout(dest) {
      router.push(dest);
    },
  },
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
  data: function () {
    return {
      links: links,
    };
  },
};
</script>
