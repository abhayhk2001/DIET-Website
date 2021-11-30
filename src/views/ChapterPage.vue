<template >
  <div class="chapter-page">
    <div class="navbar-container">
      <div class="heading"><h1>Chapter Sections</h1></div>
      <div class="section1">Activity Sheets</div>
      <div class="section2">AR Video</div>
      <div class="section3">Charts</div>
      <div class="section4">PPTs</div>
      <div class="section5">Videos</div>
    </div>
    <div class="main">hi hello world</div>
  </div>
</template>



<script>
export default {};
</script>



<style>
body {
  overflow: hidden;
  height: 100vh;
}
main {
  overflow-y: auto;
}
.navbar-container {
  max-width: 10rem;
  flex: 1 0 10%;
  background-color: red;
}
.chapter-page {
  display: flex;
  height: 100%;
}
</style>