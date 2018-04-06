// Vue.component('autosize-textarea', {
//   template: '<div class="autosize-textarea"><textarea v-model="val" autocomplete="off"></textarea><pre>{{val}} \n \n</pre></div>',
// });

<template>
  <div class="autosize-textarea"><textarea v-model="val" autocomplete="off"></textarea><pre>{{val}} \n \n</pre></div>
</template>

<style scoped>

/* Autosize */
.autosize-textarea {
  position: relative;
  border: 0;
  padding: 0.1em;
}

.autosize-textarea pre,
.autosize-textarea textarea {
  border: 0;
  padding: 0;
  font-size: 1em;
  word-wrap: break-word;
  text-wrap: normal;
  white-space: pre-wrap;
  font-family: inherit;
  line-height: 1.4em;
  resize: none;
  min-height: 3em;
  display: block;
}

.autosize-textarea textarea {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.autosize-textarea pre {
  visibility: hidden;
}

</style>
