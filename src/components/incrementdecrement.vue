<template>
    <p>A word is used at least  
      <button v-on:click.prevent="$store.dispatch('increment')">+</button>
       {{ newCount }} 
      <button v-on:click.prevent="$store.dispatch('decrement')">-</button>
      times when it shows up in the tag cloud. 
    </p>

</template>

<script>
  export default {
    computed: {
      newCount(){
        return this.$store.getters.count
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 

  button.button {
    margin: 1em auto;
    display:block 
  }
  p {
    text-align:center;
    padding: 10px 0 20px;
  }

</style>
