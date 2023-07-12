<template>

  <div id="app">
    <side-bar></side-bar>
    <div id="bkg"></div>
    <div id="bkg-block"></div>
    <div id="main-content">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
import SideBar from './components/Side-Bar.vue'
// import TeamDetail from './components/Team-Detail.vue'
export default{
  name:"app",
  components: {
    SideBar,
  },
}
</script>

<style>
#main-content {
  width: calc(100% - 200px);
  height: 100vh;
  position: absolute;
  right: 0;
  box-sizing:border-box;
}
#bkg {
  width: 100%;
  height: 100vh;
  position: absolute;
  right: 0;
  box-sizing:border-box;
  /* background-image: url("../static/background.webp"); */
  opacity:0.3;
  pointer-events:none;
}
#bkg-block {
  width: calc(100% - 200px);
  height: 100vh;
  position: absolute;
  right: 0;
  box-sizing:border-box;
  background: rgba(247, 247, 247, 0.6);
}


</style>
