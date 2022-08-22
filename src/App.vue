
<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name:'app'

}
</script>
<style>
#app{
  width: 100%; height: max-content;
  position: absolute;background: linear-gradient(135deg,#29323C,#2B5876,#4E4376);background: -webkit-linear-gradient(135deg,#29323C,#2B5876,#4E4376);background: -o-linear-gradient(135deg,#29323C,#2B5876,#4E4376);background: -moz-linear-gradient(135deg,#29323C,#2B5876,#4E4376);background: -ms-linear-gradient(135deg,#29323C,#2B5876,#4E4376);
}

</style>