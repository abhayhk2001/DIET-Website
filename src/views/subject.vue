<template>
  <div class="wrapper">
    <div v-html="aaa"></div>
    <div class="Grade">
      <h2>{{ $route.params.SUB }} {{ $route.params.class }}</h2>
      <div
        class="subject"
        v-on:click="
          rout('/' + $route.params.class + '/' + $route.params.SUB + '/' + a)
        "
        v-for="(b, a) in links[$route.params.class][$route.params.SUB]"
        :key="a"
      >
        Chapter {{ a }} - {{ b['name'] }}
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import links from "../links.js";

export default {
  methods: {
    rout(dest) {
      router.push(dest);
    },
  },
  data: function () {
    let chapterlist = {
      1: "Lalu and Peelu",
      2: "Clap Clap Clap",
      3: "Looking Around",
    };

    let chapterlist2 = {
      1: {},
      2: {},
      3: {
        EVS: {
          1: "evsPoonam's Day Out",
          2: "The Plant Fairy",
          3: "Water O’ Water",
          4: "Our First School",
          5: "Chhotu’s House",
          6: "Foods We Eat",
          7: "Saying Without Speaking",
          8: "Flying High",
          9: "It’s Raining",
          10: "What Is Cooking",
          11: "From Here To There",
          12: "Work We Do",
          13: "Sharing Our Feelings",
          14: "The Story Of Food",
          15: "Making Pots",
          16: "Games We Play",
          17: "Here Comes A Letter",
          18: "A House Like This",
          19: "Our Friends Animals",
          20: "Drop By Drop",
          21: "Families Can Be Different",
          22: "Left Right",
          23: "A Beautiful Cloth",
          24: "Web Of Life",
        },
        ENG: {
          1: "ENG3Poonam's Day Out",
          2: "The Plant Fairy",
          3: "Water O’ Water",
          4: "Our First School",
          5: "Chhotu’s House",
          6: "Foods We Eat",
          7: "Saying Without Speaking",
          8: "Flying High",
          9: "It’s Raining",
          10: "What Is Cooking",
          11: "From Here To There",
          12: "Work We Do",
          13: "Sharing Our Feelings",
          14: "The Story Of Food",
          15: "Making Pots",
          16: "Games We Play",
          17: "Here Comes A Letter",
          18: "A House Like This",
          19: "Our Friends Animals",
          20: "Drop By Drop",
          21: "Families Can Be Different",
          22: "Left Right",
          23: "A Beautiful Cloth",
          24: "Web Of Life",
        },
        MATH: {
          1: "mat3Poonam's Day Out",
          2: "The Plant Fairy",
          3: "Water O’ Water",
          4: "Our First School",
          5: "Chhotu’s House",
          6: "Foods We Eat",
          7: "Saying Without Speaking",
          8: "Flying High",
          9: "It’s Raining",
          10: "What Is Cooking",
          11: "From Here To There",
          12: "Work We Do",
          13: "Sharing Our Feelings",
          14: "The Story Of Food",
          15: "Making Pots",
          16: "Games We Play",
          17: "Here Comes A Letter",
          18: "A House Like This",
          19: "Our Friends Animals",
          20: "Drop By Drop",
          21: "Families Can Be Different",
          22: "Left Right",
          23: "A Beautiful Cloth",
          24: "Web Of Life",
        },
      },
    };
    let aaa = `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3GC9LSyNaGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    return {
      chapterlist,
      chapterlist2,
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
  paddng: 0;
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

.Grade {
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
