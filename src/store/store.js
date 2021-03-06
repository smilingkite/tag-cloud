import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
function filterTags (tagArray, commontags) {
  return tagArray.filter(tagObject => {
    return !commontags.includes(tagObject.name)
  })
}
function maxTags (tagArray, c) {
  if (tagArray.length < 10) return tagArray
  tagArray = tagArray.filter(tagObject => {
    return tagObject.count > c 
  })
  return tagArray
}

export default new Vuex.Store({
 state: {
  tags: [],
  originaltags: [],
  count: 1, 
  commontags: [
  '', 
  'a',  'an', 'and', 'as', 'are', 'at',
  'but', 'be', 'by',
  'can',
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
  'what', 'which', 'with', 'was', 'were', 'we'
  ]
 },
 mutations: {
  GET_TAGS (state, payload) {
    var count = state.count
    var commontags = state.commontags
    var tags = maxTags(filterTags(toTags(payload), commontags), count)
    state.tags = tags
    state.originaltags = tags
  },
  INCREMENT (state) {
    state.count++;
    state.tags = maxTags(state.tags, state.count)
  },
  DECREMENT (state) {
    if(state.count > 0){
      state.count-- ;

      var count = state.count
      var originaltags = state.originaltags
      var commontags = state.commontags

      var tags = maxTags(filterTags(originaltags, commontags), count)
      state.tags = tags
    }
  },
  FILTER_TAG (state, tag) {
    var count = state.count
    var tags = state.tags
    var commontags = state.commontags
    state.commontags.push(tag)
    var tags = maxTags(filterTags(tags, commontags), count)
    state.tags = tags
  }
 },
 actions: {
  gettags({commit}, tags){
    commit('GET_TAGS', tags)
  },
  increment({commit},count){
    commit('INCREMENT', count)
  },
  decrement({commit},count){
    commit('DECREMENT', count)
  },
  filterTag({commit}, commontags){
    commit('FILTER_TAG', commontags)
  }
 },
 getters: {
  tags: state => state.tags,
  count: state => state.count
 }

})