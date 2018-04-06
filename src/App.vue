<template>
  <div id="app">
    <Tags></Tags>
  </div>
</template>

<script>
import Tags from './components/Tags.vue'
export default {
  name: 'app',
  components: {
    Tags
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 50%;
}

</style>
