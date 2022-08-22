<template>
<div id="menu">
  <article class="panel is-link">
    <!--title-->
    <p class="panel-heading" id="titel-list-coin">
      Coins
    </p>
    <!--ul tag for coin-->
    <ul v-for=" (coin) in $store.state.data" :key="coin">
      <router-link :to="`/coin/${coin.id}`" style=