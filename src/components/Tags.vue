<template>
  <div>
    <form method="post" v-on:submit="filterText">
      <b-form-textarea id="textarea1"
                      v-model="text"
                      placeholder="Enter something"
                      :rows="3"
                      :max-rows="10"
      >
      </b-form-textarea>
      <button class="button">submit</button>
    </form>
    <p>Minimum amount of word usage # 
      <button v-on:click="$store.dispatch('increment')">+</button>
       {{ newCount }} 
      <button v-on:click.prevent="$store.dispatch('decrement')">-</button>
    </p>
    
    <ul class="tags">
      <li v-for="tag in tags" :key="tag.id" v-bind:style="{fontSize: 1 + tag.count/5  + 'em'}" > {{tag.name}} </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
    }
  },
  methods: {
      filterText(e) {
      e.preventDefault();

      var filteredText = this.text.replace(/[.,\/#!?\“—–\”$\'\’\"%\^&\*;:{}=\-_`~()0-9]/g, ' ').replace(/\s+/g, ' ').toLowerCase()
            console.log(filteredText)
      var tags = filteredText.split(' ')
      console.log(tags)
      // let count = this.newCount
      // console.log(count)
      this.$store.dispatch('gettags', tags)
      // newtags = maxTags(filterTags(toTags(this.tags)))
    },

  },
  computed: {
    newCount(){
      return this.$store.getters.count
    },
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
  p {
    text-align:center;
    padding: 30px 0;
  }
  button.button {
    margin: 1em auto;
    display:block 
  }
  .container {
    box-shadow: 0px 0px 40px lightgray;
  }
  textarea {
    width: calc(100%);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

</style>
