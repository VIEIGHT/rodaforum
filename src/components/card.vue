<template>
<div class="content">
<div class="image"><img :src="require(`../assets/img-coin/${image}.png`)"  :alt="title"></div>
  <div class="Title">
    <h3>{{title}}</h3>
    <p>{{paragraph}}</p>
    <a :href="link" class="">More...</a>
  </div>
</div>
</template>

<script>
export default {
  name: "card",
  //props
  props:{
    image:String,
    title:String,
    link:String,
    paragraph:String
  },
}
</script>

<style scoped>
.content{
  width: 180px;
  height: 260px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-content: space-between;
  align-items: center;
  margin:10px;
}
.image{
  width: 70%;
  border-bottom: 1px solid #6b6b6b;
}


</style>