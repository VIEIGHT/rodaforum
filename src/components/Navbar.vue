
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
            </div>
          </div>
        </div>
      </div>
    </nav>

	</div>
</template>

<script>

export default{
  name:'Navbar',

  created() {

    document.addEventListener('DOMContentLoaded', () => {
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      if ($navbarBurgers.length > 0) {

        $navbarBurgers.forEach( el => {
          el.addEventListener('click', () => {

            const target = el.dataset.target;
            const $target = document.getElementById(target);


            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

          });
        });
      }

    });

  }

}
</script>

<style scoped>
@import url(~bulma/css/bulma.css);
.navbar{
  width: 100%;
  background-color: rgba(0,0,0,0);
  
}
#logo{
  font-size: 32px;
  color:white;
}