import { createRouter, createWebHashHistory } from "vue-router";
import Index from '../pages/Index.vue'
import Content from '../pages/Content.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: "/index" },
    { path: '/index', component: Index },
    { path: '/p/:id', component: Content },
  ]
})
