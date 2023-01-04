
<template>
  <div class="home">
    <!--Navbar-->
   <Navbar/>
    <!--content-->
    <div id="content">
      <!--tab one-->
      <div class="tab_one">
        <!--lorem 1-->
      <div class="lorems">
      <p  class="title is-2  lorem">Marcet Coin</p>
      <p  class="subtitle is-5 lorem_2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in est ultricies, venenatis leo eget, pulvinar dui. Donec tristique a ipsum sed tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent vestibulum dolor id tincidunt blandit. Cras accumsan non nunc in commodo.</p>
        <router-link to="/mart" class="button is-primary">get started</router-link>
     </div>
        <!--image1-->
     <div class="image">
       <img src="../assets/img.png" width="580" >
     </div>
      </div>
      <!--tab two-->
      <div class="tab_two">
        <!--image2-->
        <div class="image">
          <img src="../assets/undraw_connected_world_wuay.png" width="600px" >
        </div>
        <!--lorem2-->
        <div class="lorems">
          <p  class="title is-2  lorem">Global</p>
          <p  class="subtitle is-5 lorem_2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in est ultricies, venenatis leo eget, pulvinar dui. Donec tristique a ipsum sed tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent vestibulum dolor id tincidunt blandit. Cras accumsan non nunc in commodo.</p>
        </div>
      </div>
      <!--card-->
      <div class="tab_three">
        <card image="bitcoin" title="bitcoin" paragraph="coin bitcoin token!" link="https://en.wikipedia.org/wiki/Bitcoin"/>
        <card image="ethereum" title="Ethereum" paragraph="coin Ethereum token!" link="https://en.wikipedia.org/wiki/Ethereum"/>
        <card image="binance" title="binance" paragraph="coin binance token!" link="https://en.wikipedia.org/wiki/Binance"/>
        <card image="cardano" title="Cardano" paragraph="coin Cardano token!" link="https://en.wikipedia.org/wiki/Cardano_(blockchain_platform)"/>
        <card image="avalanche" title="Avalanche" paragraph="coin Avalanche token!" link="https://en.wikipedia.org/wiki/Avalanche_(blockchain_platform)"/>
        <card image="tether" title="Tether" paragraph="coin Tether token!" link="https://en.wikipedia.org/wiki/Tether_(cryptocurrency)"/>

      </div>
      <!--text-->
      <div class="tab_four">
       <h1 class="has-text-white thank">Thank you for choosing this site to use <i class="bi bi-heart-fill has-text-danger"></i></h1>
      </div>
    </div>
    <!--footer-->
    <div class="tab-footer">
      <footerr/>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Card from "../components/card";
import footerr from "../components/footer";


export default {
  name: 'Home',
  components:{Card ,Navbar,footerr}

}
</script>

<style scoped>
#content{
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  margin-left: 5%;
}
.tab_one,.tab_two{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 400px;
}
.tab_three{
  display: flex;
  justify-content:space-evenly;
  margin-left: -65px;
  flex-wrap: wrap;
}
.lorems{
  width: 40%;
  margin-right: 20px;
}
img{
  border-radius: 20px;
  width: 600px;
}
.image{
  margin-right:30px;
}
.lorem {
  color: white;
}
.lorem_2{
color: #cecccc
}
.tab_four{
  display: flex;
  justify-content: center;
  margin: 150px 0px;
}
.thank{
  font-size: 30px;
}
@media only screen and (max-width: 1073px) {
   img{
     width: 500px;
   }
  .tab_two,.tab_one{
    flex-wrap: wrap;