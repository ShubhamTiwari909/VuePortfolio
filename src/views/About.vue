<template>
  <div>
    <div
      class="grid grid-cols-1 place-content-center lg:grid-cols-2 py-5 px-5 bg-gradient-to-r from-slate-800 via-slate-900 to-black"
    >
      <div class="place-self-center">
        <h1
          class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-500 text-3xl md:text-5xl text-center"
        >
          Welcome
        </h1>
        <h1
          class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-4xl md:text-6xl text-center"
        >
          I am Shubham Tiwari
        </h1>
        <h1
          class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-500 text-3xl md:text-5xl text-center"
        >
          Front-End Web Developer
        </h1>
        <div class="flex gap-2 justify-center my-3">
          <i class="fa-brands fa-html5 text-orange-700 md:text-2xl"></i>
          <i class="fa-brands fa-css3-alt text-blue-600 md:text-2xl"></i>
          <i class="fa-brands fa-js-square text-yellow-600 md:text-2xl"></i>
          <i class="fa-brands fa-react text-blue-500 md:text-2xl"></i>
          <i class="fa-brands fa-bootstrap text-indigo-600 md:text-2xl"></i>
          <i class="fa-brands fa-vuejs text-green-600 md:text-2xl"></i>
        </div>
      </div>
      <div class="place-self-center my-8 h-20 md:h-60">
        <img
          :src="image"
          class="rounded-full object-contain"
          v-prlx.mobile="{ reverse: true, mobileMaxWidth: 500 }"
        />
      </div>
    </div>
    <div>
      <Summary  />
    </div>
  </div>
</template>

<script>
import MyProfile from "../assets/images/MyImage.jpg";
import Summary from "./SmallComponents/Summary.vue";

export default {
  components: {
    Summary,
  },
  data() {
    return {
      image: MyProfile,
    };
  },
};
</script>

<style scoped>

</style>
