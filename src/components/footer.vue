<template>
<div class="footer">
  <div class="list-menu">
    <ul>
      <li><i class="bi bi-code-slash"></i> devloper</li>
      <li><i class="bi bi-house"></i> Home</li>
      <li><i class="bi bi-coin"></i> mart</li>
      <li><i class="bi bi-person-circle"></i> account</li>
      <li><i class="bi bi-info-lg"></i> about</li>
    </ul>
    <ul>
      <li><i class="bi bi-arrow-down-up"></i> Coin API</li>
      <li><i class="bi bi-person-plus"></i> sign up</li>
      <li><i class="bi bi-box-arrow-in-right"></i> log in</li>
    </ul>
  </div>
  <div class="list-links">
    <ul dir="rtl">
      <li>  <i class="bi bi-github"></i> Github</li>
      <li> <i class="bi bi-stack-overflow has-text-warning-dark"></i> stack overflow</li>
      <li><i class="bi bi-linkedin has-text-info"></i> linkedin</li>
      <li><i class="bi bi-twitch has-text-link"></i> twitch</li>
      <li><i class="bi bi-twitter has-text-info"></i> twitter</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer{
  width: 100%;height:250px;
  background-color: #073148;
  box-shadow: -3px 0px 10px #073148;
  display: flex;
  justify-content: space-between;
}
.list-menu{
  display: flex;
}
li{
  font-size: 15px;
  margin: 10px;
  c