<template>
  <div>
    <nav
      class="w-full flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-r from-slate-800 via-slate-900 to-black border-b-2 border-slate-200 md:border-none"
    >
      <div
        class="container px-4 mx-auto flex flex-wrap items-center justify-between"
      >
        <div
          class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
        >
          <div
            class="grid grid-cols-2 place-items-center lg:text-xl font-bold leading-relaxed mr-4 py-2 whitespace-nowrap text-white"
          >
            <i class="fa-solid fa-laptop-code fa-2x text-violet-100"></i>
          </div>
          <button
            class="text-slate-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-slate-100 block lg:hidden outline-none focus:outline-none"
            type="button"
            @click="setNavbarOpen"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
        <div
          v-bind:class="collapseStyle"
          class="lg:flex flex-grow justify-center"
          id="example-navbar-danger"
        >
          <ul class="flex flex-col -mx-4 lg:flex-row list-none lg:ml-auto">
            <li class="nav-item mr-4 my-3 md:my-0" @click="setNavbarOpen">
              <router-link to="/" class="text-white">About</router-link>
            </li>
            <li class="nav-item mr-4 my-3 md:my-0" @click="setNavbarOpen">
              <router-link to="/skills" class="text-white">Skills</router-link>
            </li>
            <li class="nav-item mr-4 my-3 md:my-0" @click="setNavbarOpen">
              <router-link to="/projects" class="text-white"
                >Project</router-link
              >
            </li>
            <li class="nav-item mr-4 my-3 md:my-0" @click="setNavbarOpen">
              <router-link to="/blogs" class="text-white">Blogs</router-link>
            </li>
            <li class="nav-item mr-4 my-3 md:my-0" @click="setNavbarOpen">
              <router-link to="/contacts" class="text-white"
                >Contact</router-link
              >
            </li>
            <li class="nav-item mr-4 my-3 md:my-0" @click="setNavbarOpen">
              <router-link to="/resume" class="text-white">Resume</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./views/Footer.vue";

export default {
  data() {
    return {
      navbarOpen: false,
      collapseStyle: "hidden",
    };
  },
  methods: {
    setNavbarOpen() {
      this.navbarOpen = !this.navbarOpen;
      if (this.collapseStyle === "hidden") {
        this.collapseStyle = "flex";
      } else {
        this.collapseStyle = "hidden";
      }
    },
  },
  components: { Footer },
};
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
