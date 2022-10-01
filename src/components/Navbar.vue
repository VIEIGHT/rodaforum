
<template>
	<div class="navbar">

    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <p class="navbar-item">
         <span id="logo"><i class="bi bi-currency-exchange has-text-primary"></i></span>
        </p>

        <a role="button" class="navbar-burger is-white" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span style="color: white" aria-hidden="true"></span>
          <span style="color: white" aria-hidden="true"></span>
          <span style="color: white" aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">
           Home
          </router-link>
          <router-link to="/mart" class="navbar-item">
            mart
          </router-link>
          <router-link to="/about" class="navbar-item">
            about
          </router-link>



        </div>

        <div class="navbar-end ml-5">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <i class="bi bi-person"></i>  Sign up
              </a>
              <a class="button is-white is-outlined">
                Log in
              </a>