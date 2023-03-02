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
      