<template>
<div id="menu">
  <article class="panel is-link">
    <!--title-->
    <p class="panel-heading" id="titel-list-coin">
      Coins
    </p>
    <!--ul tag for coin-->
    <ul v-for=" (coin) in $store.state.data" :key="coin">
      <router-link :to="`/coin/${coin.id}`" style="display:contents">
    <li class="panel-block" >
      <span style="font-size: 20px;width: 191px;"> <img :src="`https://cdn.arzdigital.com/uploads/assets/coins/icons/32x32/${coin.id}.png`" width="30" height="30"> {{coin.name}} </span>
      <p style="font-size: 20px;">{{coin.priceUsd.slice(0,7)}} $</p>
      <svg v-if="coin.changePercent24Hr <'0'" width="30px" height="30px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5-c</title><polyline points="352 368 464 368 464 256" style="fill:none;stroke:red;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M48,144,169.37,265.37a32,32,0,0,0,45.26,0l50.74-50.74a32,32,0,0,1,45.26,0L448,352" style="fill:none;stroke:red;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>
      <svg v-if="coin.changePercent24Hr >'0'" width="30px" height="30px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5-c</title><polyline points="352 144 464 144 464 256" style="fill:none;stroke:#02ff02;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M48,368,169.37,246.63a32,32,0,0,1,45.26,0l50.74,50.74a32,32,0,0,0,45.26,0L448,160" style="fill:none;stroke:#02ff02;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>
    </li>
      </router-link>
    </ul>
  </article>
</div>
</template>

<script>
export default {
  name: "MenuCoin",
  //get API
  created() {
    this.$store.commit('getApi')
  },
}
</script>

<style scoped>
#menu {
  width: 100%;
  height: calc(100% - 61px);
  position: absolute;
  background-color: white;
  overflow-y: auto;
}
#menu::-webkit-scrollbar {
  display:none;
}
ul{
  border-bottom: 1px solid #073148;
  padding: 10px 1px;
}
ul:hover{
  cursor: pointer;
  background-color: #f8f2f2;
}
.panel-block{
  display: flex;
  justify-content: space-between;
}
#titel-list-coin{
  border-radius: 0px;
  font-family: sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #073148;
}
</style>