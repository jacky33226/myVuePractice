<template>
  <div id="editor">
    <textarea :value="input" @input="update"></textarea>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
  import _ from 'lodash';
  import marked from 'marked';
  export default {
    //el:'#editor',   //  option "el" can only be used during instance creation with the `new` keyword.
    name: 'MarkdownEditor',
    data () {
      return {
        input: '# hello'
      }
    },
    computed:{
      compiledMarkdown(){
        return marked(this.input, { sanitize: true });
      }
    },
    methods:{
      update: _.debounce(function (e) {
        this.input = e.target.value
      },300)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
