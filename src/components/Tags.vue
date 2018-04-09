<template>
  <div>
    <form method="post" v-on:submit="filterText">
      <b-form-textarea id="textarea1"
                      v-model="text"
                      placeholder="Enter something"
                      :rows="3"
      >
      </b-form-textarea>
      <button class="button">submit</button>
    </form>
    <pre class="mt-3">{{ words }}</pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      words: []  
    }
  },
  methods: {
    filterText: function(e) {
      e.preventDefault();
      var filteredText = this.text.replace(/[.,\/#!?$\'\"%\^&\*;:{}=\-_`~()]/g, ' ').replace(/\s+/g, ' ').toLowerCase()
      this.words = filteredText.split(' ')
      function toTags (array) {
        array.sort()
        var tagArray = Object.values(array.reduce((resultTagArr, tag) => {
          if (!resultTagArr[tag]) {
            resultTagArr[tag] = {name: tag, count: 1}
            // gives array of named objects: tagName: {name: tag, count: 1}
          } else { resultTagArr[tag]['count'] += 1 }

          return resultTagArr
        }, {}))
        return tagArray
      }
      function filterTags (tagArray) {
        var commonWords = ['', 'a', 'and', 'be', 'is', 'are', 'but', 'the', 'an', 'if', 'that', 'this', 'it', 'so', 't', 'don', 'of', 'is', 'to']
        return tagArray.filter(tagObject => {
          return !commonWords.includes(tagObject.name)
        })
      }
      this.words = filterTags(toTags(this.words))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 
  .holder {
    background: #fff;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }
  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }
  .container {
    box-shadow: 0px 0px 40px lightgray;
  }
  textarea {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }
  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }
  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
i {
  float:right;
  cursor:pointer;
}
</style>
