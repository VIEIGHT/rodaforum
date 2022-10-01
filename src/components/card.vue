<template>
<div class="content">
<div class="image"><img :src="require(`../assets/img-coin/${image}.png`)"  :alt="title"></div>
  <div class="Title">
    <h3>{{title}}</h3>
    <p>{{paragraph}}</p>
    <a :href="link" 