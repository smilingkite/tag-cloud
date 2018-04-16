<template>
  <div>
    <ul class="tags">
      <li v-for="tag in tags" :key="tag.id" v-bind:style="{fontSize: 1 + tag.count/5  + 'em'}" > {{tag.name}} </li>
    </ul>
  </div>
</template>

<script>

export default {
  computed: {
    tags(){
      return this.$store.getters.tags
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    background-color: #E0EDF4;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: wrap;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;

    margin-bottom: 2px;
    display: inline-block;
  }
</style>
