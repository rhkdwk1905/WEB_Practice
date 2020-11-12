<template>
  <div id="app">
      <div @click="mouseClick()" >
      <img id="img" style="cursor: pointer" to="/" src="./img/logo.jpg">
      </div>
	<router-view/>
  </div>
</template>
<script>
	export default {
	}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#img{
  position:relative;
  height:150px;
  margin-bottom:10px;
}
</style>
