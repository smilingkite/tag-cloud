<template>
  <div class="tags">
    <ul>
      <li v-for="tag in tags" :key="tag.id" v-bind:style="{fontSize: 1 + (tag.count-count)/5  + 'em'}" > {{tag.name}} </li>
    </ul>
  </div>
</template>

<script>

export default {
  computed: {
    tags(){
      return this.$store.getters.tags
    }, 
    count(){
      return this.$store.getters.count
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 

  .tags {
    background-color: #E0EDF4;
    padding: 2em 0;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;

    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: wrap;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    line-height: 0.7em;
    margin-bottom: 2px;
    display: inline-block;
  }
</style>
