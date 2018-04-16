<template>

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
      var tags = filteredText.split(' ')
      this.$store.dispatch('gettags', tags)
    },

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 


  button.button {
    margin: 1em auto;
    display:block 
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
