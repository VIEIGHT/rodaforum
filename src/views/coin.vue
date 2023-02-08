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
        <svg v-if="data.changePercent24Hr <'0'" width="50" height="50" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title