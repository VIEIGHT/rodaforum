<template>
  <div class="home">
      <Navbar/>
    <!--menu coin-->
    <div class="menu-coin">
      <MenuCoin/>
    </div>
  </div>
</template>

<script>

import Navbar from "../components/Navbar";
import MenuCoin from "../components/MenuCoin";

export default {
  name: 'mart',
  components: {
    Navbar,MenuCoin
  },
}
</