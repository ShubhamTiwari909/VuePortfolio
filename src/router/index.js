import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Skills from '../views/Skills.vue'
import Project from '../views/Project.vue'
import Blogs from '../views/Blogs.vue'
import Contact from '../views/Contact.vue'
import Resume from '../views/Resume.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'about',
    component: About
  },
  {
    path: '/skills',
    name: 'skills',
    component:Skills
  },
  {
    path: '/projects',
    name: 'project',
    component: Project
  },
  {
    path: '/blogs',
    name: 'blog',
    component:Blogs
  },
  {
    path: '/contacts',
    name: 'contact',
    component: Contact
  },
  {
    path: '/resume',
    name: 'resume',
    component:Resume
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
