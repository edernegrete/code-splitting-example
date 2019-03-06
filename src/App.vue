<template>
  <div id="app" class="cover-container d-flex h-100 p-3 mx-auto flex-column">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'app',
  components: {
    Nav,
  },
}
</script>

<style>
  body {
    display: flex;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    justify-content: center;
    color: #fff;
    text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, .5);
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
  }
  html, body {
    height: 100%;
    background-color: #333;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
  }
  img {
    width: 100%;
  }
  .nav-list {
    display: flex;
    align-content: center;
    list-style: none;
  }
  .main-image {
    margin: 0 auto 2rem auto;
    height: 30%;
    width: 52%;
  }
</style>
