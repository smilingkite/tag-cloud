<template>
  <div>
    <ul class="filtertags">
      <li v-for="tag in tags" :key="tag.id"> {{tag.name}} <button v-on:click.prevent="$store.dispatch('filterTag', tag.name)">-</button></li>
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
<style scoped>
</style>
