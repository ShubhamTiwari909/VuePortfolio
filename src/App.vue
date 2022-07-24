<template>
  <div>
    <b-navbar toggleable="lg" class="py-3 bg-gradient-to-r from-slate-800 via-slate-900 to-black border-b-2 border-slate-400">
      <b-navbar-brand href="#">
        <i class="fa-solid fa-laptop-code fa-2x text-violet-100"></i>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="bg-white"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="grid justify-center">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav class="mr-5">
            <b-nav-item>
              <router-link to="/" class="text-white">About</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/skills" class="text-white"
                >Skills</router-link
              >
            </b-nav-item>
            <b-nav-item>
              <router-link to="/projects" class="text-white"
                >Project</router-link
              >
            </b-nav-item>
            <b-nav-item>
              <router-link to="/blogs" class="text-white"
                >Blogs</router-link
              >
            </b-nav-item>
            <b-nav-item>
              <router-link to="/contacts" class="text-white"
                >Contact</router-link
              >
            </b-nav-item>
            <b-nav-item>
              <router-link to="/resume" class="text-white"
                >Resume</router-link
              >
            </b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from './views/Footer.vue'

export default {
  components: {Footer}
}
</script>

<style>
nav a.router-link-exact-active {
  color: white;
  padding: 7px;
  border: 1px solid white;
  border-radius: 6px;
  text-decoration: none;
}

</style>
