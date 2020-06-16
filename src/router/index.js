import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'
import MarkdownEditor from "../components/MarkdownEditor";
import CssTest from '@/components/CssTest';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MarkdownEditor',
      components: {default :MarkdownEditor,
        a:HelloWorld2}
    },
    {
      path: '/HelloWorld2',
      name: 'HelloWorld2',
      component: HelloWorld2
    },
    {
      path: '/',
      name: 'MarkdownEditor1',
      component: MarkdownEditor
    },
    {
      path: '/CssTest',
      name: 'CssTest',
      component: CssTest
    },

  ]
})
