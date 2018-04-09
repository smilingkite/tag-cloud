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
    <p>Minimum amount of word usage # {{ count }}</p>
    <button v-on:click.prevent="increment">+</button>
    <button v-on:click.prevent="decrement">-</button>
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
      tags: [],
      count: 1,  
    }
  },
  // watch: {
  //   increment () {
  //     this.count++;
  //   },
  //   decrement () {
  //     if(this.count > 0){
  //       this.count-- ;
  //     }
  //   }
  // },
  methods: {
    filterText: function(e) {
      e.preventDefault();
      var filteredText = this.text.replace(/[.,\/#!?\“—–\”$\'\"%\^&\*;:{}=\-_`~()0-9]/g, ' ').replace(/\s+/g, ' ').toLowerCase()
      this.tags = filteredText.split(' ')
      let count = this.count
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
        'a',  'an', 'and', 'as', 'are', 'at',
        'but', 'be', 'by',
        'don', 
        'every',
        'for', 
        'had', 'has', 'have',
        'is', 'in', 'it', 'if', 'i',
        'like',
        'me', 'my',
        'of', 'on', 'or',
        'so',
        'the',  'that', 'this', 'to', 't', 'then',
        'you', 'your',
        'what', 'which', 'with', 'was', 'were'
        ]
        return tagArray.filter(tagObject => {
          return !commontags.includes(tagObject.name)
        })
      }
      function maxTags (tagArray, c = count) {
        console.log(count)

        if (tagArray.length < 10) return tagArray
        tagArray = tagArray.filter(tagObject => {
          console.log('/////count')
          return tagObject.count > c 
        })
        // if (tagArray.length > 50) {
        //   return maxTags(tagArray, count++)
        // }
        return tagArray
      }
      this.tags = maxTags(filterTags(toTags(this.tags)))
    },
    increment () {
      this.count++;
    },
    decrement () {
      if(this.count > 0){
        this.count-- ;
      }
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
