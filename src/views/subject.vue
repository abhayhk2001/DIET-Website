<template>
  <div class="wrapper">
    <!-- <div v-html="aaa"></div>  delete thsi line after next step-->
    <div class="Subj-subject">
      <h2>{{ $route.params.SUB }} {{ $route.params.class }}</h2>
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
    return {
      links,
      aaa,
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

main {
  margin: 2rem;
}

h1 {
  text-align: center;
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
  padding: 2rem;
  width: 90%;
  margin: 0 1rem 4rem;
  background: white;
  text-align: center;
  /* position: relative; */
  /*   
  background: rgba( 80, 227, 194, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 ); 
*/
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
}
</style>
