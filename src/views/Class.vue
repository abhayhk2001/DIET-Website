<template>
  <div class="wrapper">
    <div
      class="Grade"
      style="
        background: rgba(80, 227, 194, 0.25);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.18);
      "
    >
      <h2>Class 1</h2>
      <div class="subject" v-on:click="rout('/1/EVS')">EVS</div>
      <div class="subject" v-on:click="rout('/1/MAT')">Math</div>
      <div class="subject" v-on:click="rout('/1/ENG')">English</div>
    </div>

    <div class="Grade">
      <h2>Class 2</h2>
      <div class="subject" v-on:click="rout('/2/EVS')">EVS</div>
      <div class="subject" v-on:click="rout('/2/MAT')">Math</div>
      <div class="subject" v-on:click="rout('/2/ENG')">English</div>
    </div>

    <div class="Grade">
      <h2>Class 3</h2>
      <div class="subject" v-on:click="rout('/3/EVS')">EVS</div>
      <div class="subject" v-on:click="rout('/3/MAT')">Math</div>
      <div class="subject" v-on:click="rout('/3/ENG')">English</div>
    </div>
  </div>
</template>

<script>
import router from "../router";

export default {
  methods: {
    rout(dest) {
      router.push(dest);
    },
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

.Grade {
  box-shadow: 0px 0px 20px var(--clr-graymed);
  border-radius: var(--border-radius);
  padding: 2rem;
  width: 300px;
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
