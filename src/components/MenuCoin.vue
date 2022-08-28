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
      <p style="font-size: 20px;">{{coi