<template>
  <div class="tags" v-if="tags.length>0">
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

<style scoped>

  ul {
    margin: 0;
    list-style-type: none;
    background-color: #E0EDF4;
    padding: 2em 0;
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
