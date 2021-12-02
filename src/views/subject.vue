<template>
  <div class="wrapper">
    <!-- <div v-html="aaa"></div>  delete thsi line after next step-->
    <div
      class="Subj-subject"
      v-bind:style="{ backgroundColor: links[$route.params.class]['colour'] }"
    >
      <h2 class="class-heading">
        Class {{ $route.params.class }} - {{ names[$route.params.SUB] }}
      </h2>
      <div
        class="Chapter-subject"
        v-on:click="
          rout(
            '/' +
              $route.params.class +
              '/' +
              $route.params.SUB +
              '/' +
              a +
              '/video'
          )
        "
        v-for="(b, a) in links[$route.params.class][$route.params.SUB]"
        :key="a"
      >
        Chapter {{ a }} - {{ b["name"] }}
      </div>
    </div>
  </div>
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
    let aaa = `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3GC9LSyNaGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    let names = {
      ENG: "English",
      EVS: "Environmental Studies",
      MAT: "Mathematics",
    };
    return {
      links,
      aaa,
      names,
    };
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

.class-heading {
  margin-bottom: 2rem;
}

.wrapper {
  counter-reset: number;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
}

.Subj-subject {
  box-shadow: 0px 0px 20px var(--clr-graymed);
  border-radius: var(--border-radius);
  padding: 2rem 15rem;
  width: 90%;
  margin: 0 1rem 4rem;
  background: white;
  text-align: center;
}

.Chapter-subject {
  box-shadow: 0px 0px 20px var(--clr-graymed);
  border-radius: var(--border-radius);
  cursor: pointer;
  padding: 1rem;
  width: 100%;
  margin: 1rem 0 1rem 0;
  background: white;
  text-align: center;
  transition: transform 0.2s;
}

.Chapter-subject:hover {
  transform: scale(1.01);
}
</style>
