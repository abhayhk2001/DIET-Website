<template>
  <div class="footer">
    <div class="contacts">
      <div class="rv">
        <span>RVCE</span>
        <span>Bengaluru</span>
        <span>dean.studentaffairs@rvce.edu.in</span>
      </div>
      <div class="diet">
        <span>DIET</span>
        <span>Ramnagara</span>
        <span>&lt;email&gt;</span>
      </div>
      <div class="diet">
        <span>CWC</span>
        <span>Bengaluru</span>
        <span>&lt;email&gt;</span>
      </div>
    </div>
  </div>
</template>

<style>
.footer {
  display: flex;
  align-items: center;
  background: #0228ffa8;
  color: black;
  flex-direction: row;
}

.contacts {
  display: flex;
  flex-direction: row;
  margin: 3vh 0;
}
.contacts > div {
  display: flex;
  flex-direction: column;
  margin: 0 3vw;
}
</style>

<script>
export default {
  name: "Footer",
};
</script>