<template>
  <div id="app">
    <submitText></submitText>
    <incrementdecrement></incrementdecrement>
    <Tags></Tags>
  </div>
</template>

<script>
import Tags from './components/Tags.vue'
import incrementdecrement from './components/incrementdecrement'
import submitText from './components/submitText'

export default {
  name: 'app',
  components: {
    Tags,
    incrementdecrement,
    submitText
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
  box-shadow: 0px 0px 40px lightgray;
}

</style>
