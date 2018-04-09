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
    <ul class="tags">
      <li v-for="tag in tags" :key="tag.id" v-bind:style="{fontSize: 1 + tag.count/5  + 'em'}" >{{tag.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      tags: []  
    }
  },
  computed: {
    tagCount: function(count){
      return 'tag' + count
    }
  },
  methods: {
    filterText: function(e) {
      e.preventDefault();
      var filteredText = this.text.replace(/[.,\/#!?$\'\"%\^&\*;:{}=\-_`~()]/g, ' ').replace(/\s+/g, ' ').toLowerCase()
      this.tags = filteredText.split(' ')
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
        var commontags = ['', 
        'a',  'an', 'and', 'as', 'are', 
        'but', 'be', 'by',
        'don', 
        'for', 
        'is', 'in', 'it', 'if', 'i',
        'of', 'on',
        'so',
        'the',  'that', 'this', 'to', 't', 'then',
        'you', 'your'
        ]
        return tagArray.filter(tagObject => {
          return !commontags.includes(tagObject.name)
        })
      }
      this.tags = filterTags(toTags(this.tags))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1"; */
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
    color: gray;
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
