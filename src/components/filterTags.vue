<template>
  <div>
    <h2>Get  rid of unwanted tags</h2>
    <p>Click submit to implement</p>
    <table class="filtertags">

      <tr v-for="tag in tags" :key="tag.id"> <td class="tag">{{tag.name}}</td><td> <button v-on:click.prevent="$store.dispatch('filterTag', tag.name)">-</button></td></tr>
    </table>
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
h2, p {
  text-align: center;
}
td {
  padding: 0 1em;
}
td.tag {
  text-align: right;
  width: 50%;
}
table {
  width: 100%;
}
</style>
