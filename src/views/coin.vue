<template>
  <div>
    <!--navbar-->
    <div><Navbar/></div>
    <!--content-->
    <div class="content">
    <div class="coin">
      <!--top-->
      <span class="top">
        <span>
          <div class="rank"><i class="bi bi-trophy-fill"></i> {{data.rank}}</div>
          <!--image coin-->
        <img :src="`https://cdn.arzdigital.com/uploads/assets/coins/icons/32x32/${name}.png`" width="70" height="70">
        <p id="title">{{data.symbol}}</p>
          </span>
        <!--chart-->
        <span>
        <p style="font-size: 20px;margin-right: 10px;margin-top: 22px">{{data.changePercent24Hr.slice(0,7)}} %</p>
        <svg v-if="data.changePercent24Hr <'0'" width="50" height="50" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5-c</title><polyline points="352 368 464 368 464 256" style="fill:none;stroke:red;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M48,144,169.37,265.37a32,32,0,0,0,45.26,0l50.74-50.74a32,32,0,0,1,45.26,0L448,352" style="fill:none;stroke:red;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>
      <svg v-if="data.changePercent24Hr >'0'" width="50" height="50" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5-c</title><polyline points="352 144 464 144 464 256" style="fill:none;stroke:#02ff02;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M48,368,169.37,246.63a32,32,0,0,1,45.26,0l50.74,50.74a32,32,0,0,0,45.26,0L448,160" style="fill:none;stroke:#02ff02;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>
      </span>
        </span>
      <hr>
      <!--more-->
      <div class="price">
        <p>{{data.priceUsd.slice(0,7)}}<i class="bi bi-currency-dollar"></i></p>
      </div>
      <div class="more">
        <p> name : {{data.name}}</p>
        <p>supply : {{data.supply.slice(0,10)}} {{data.symbol}}</p>
        <p>vwap24Hr : {{data.vwap24Hr.slice(0,10)}} {{data.symbol}}</p>
        <p>marketCapUsd : {{data.marketCapUsd.slice(0,8)}} $</p>
        <p><a :href="`${data.explorer}`"><i class="bi bi-link-45deg"></i>more</a></p>
      </div>
      <!--footer-->
    </div>
      <Footer/>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
export default {
  name:'coin',
  components: {Navbar,Footer} ,
  data(){
    return{
      name:this.$route.params.id,
      data:''
    }
  },
  //get API
  created() {
    fetch(`https://api.coincap.io/v2/assets/${this.name}`)
        .then(res => {
          return res.json()
        }).then(response => this.data = response.data)
  }
}
</script>
<style scoped>
.content{
  display: flex;
  justify-content: center;
  align-items: center;
  height: max-content;
  flex-direction: column;
}
.coin{
  width: 60%; height:80%;
  background-color: #2c2b2b;
  border-radius: 20px;
  margin: 80px;
}
p{
  font-size: 30px;
  color: white;
  margin-left: 20px;
}
span{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 18px;
}
img{
  border-radius: 50%;
  border: 3px solid white;
  margin-right: 20px;
  background-color: white;
}
.price{
  width: 160px; height: 80px;
  border-radius: 10px;
  background: #05e1dd;
  box-shadow:  27px 27px 100px #026563,
  0px 0px 10px #64b7b7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
}
.rank{
  font-size: 25px;
  margin: 10px;
  color: yellow;
}
.more{
  margin: 20px;
}
@media only screen and (max-width: 846px) {
 p{
   font-size: 25px;
 }
 .top{
   flex-direction: column;
   justify-content: space-between;
   align-items: stretch;
 }
 .price{
   width: 135px; height: 60px;
 }
}
@media only screen and (max-width: 660px) {
  p{
    font-size: 20px;
  }
  #title{
    font-size: 25px;
  }
}
@media only screen and (max-width: 505px) {
  .coin{
    width: 85%;
  }
  p{
    font-size: 15px;
  }
  #title{
    font-size: 20px;
  }
  .price{
    width: 90px;
    height: 50px;
  }
}
@media only screen and (max-width: 453px) {
  .coin{
    width: 99%;
  }
 .rank{
   displa