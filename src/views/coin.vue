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
        <img :src="`https://cdn.arzdigital.com/uploads/assets/coins/icons/32x32/${na