
<template>
<div class="about">
  <Navbar/>
  <div class="content">
    <p>This site is a China block site that was created and developed by Mohammad Karimpour. Blockpin information is taken as an API from a very strong site and displayed. This site is for work! <i class="bi bi-heart-fill has-text-danger"></i></p>
    <a href="https://github.com/MohammadKarimpour2004"><i class="bi bi-github"></i></a>
  </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  name: "about" ,
  components: {Navbar}
}
</script>

<style scoped>
.content{
  height:1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
p{
  color: white;
  font-size: 40px;
  text-align: center;
  margin-bottom: 100px;
}
.bi-github{
  font-size: 50px;
  color: #000000;
}
@media only screen and (max-width: 580px) {
 p{