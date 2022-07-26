<template>
  <div class="skillBg">
    <h1 class="text-center text-slate-100 py-3">Skills</h1>
    <div class="flex justify-center mt-2 mb-8 space-x-10 text-slate-200">
      <button @click="frontend" v-bind:class="buttonStyle">Frontend</button>
      <button @click="backend" v-bind:class="buttonStyle">Backend</button>
      <button @click="other" v-bind:class="buttonStyle">Other</button>
    </div>
    <h1 v-for="item in skillsData" :key="item.SkillName">
      <div
        class="grid grid-cols-2 place-items-center w-full py-4 py-5"
        v-prlx.mobile="{ reverse: true, mobileMaxWidth: 500, speed: 0.1 }"
        v-if="item.Type === type"
      >
        <h1
          class="flex font-semibold font-mono text-slate-100 text-lg md:text-2xl lg:text-3xl drop-shadow-2xl"
        >
          {{ item.SkillName }}
        </h1>
        <div
          v-bind:class="item.Color"
          v-bind:style="{ width: item.SkillPercentage }"
          class="h-10 text-purple-100 font-bold text-center rounded-md place-self-start py-2 text-lg md:text-xl"
        >
          {{ item.SkillPercentage }}
        </div>
      </div>
    </h1>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Skills",
  setup() {
    const skillsData = ref([
    {
      SkillName: "HTML",
      SkillPercentage: "85%",
      Color: "bg-gradient-to-r from-red-900 via-red-600 to-red-400",
      Type: "Frontend",
    },
    {
      SkillName: "CSS",
      SkillPercentage: "75%",
      Color: "bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400",
      Type: "Frontend",
    },
    {
      SkillName: "JAVASCRIPT",
      SkillPercentage: "65%",
      Color: "bg-gradient-to-r from-yellow-900 via-yellow-600 to-yellow-400",
      Type: "Frontend",
    },
    {
      SkillName: "TAILWIND",
      SkillPercentage: "55%",
      Color: "bg-gradient-to-r from-indigo-900 via-indigo-600 to-indigo-400",
      Type: "Frontend",
    },
    {
      SkillName: "BOOTSTRAP",
      SkillPercentage: "85%",
      Color: "bg-gradient-to-r from-purple-900 via-purple-600 to-purple-400",
      Type: "Frontend",
    },
    {
      SkillName: "REACT",
      SkillPercentage: "55%",
      Color: "bg-gradient-to-r from-cyan-900 via-cyan-600 to-cyan-400",
      Type: "Frontend",
    },
    {
      SkillName: "MySQL",
      SkillPercentage: "55%",
      Color: "bg-gradient-to-r from-gray-600 via-gray-400 to-gray-300",
      Type: "Backend",
    },
    {
      SkillName: "NODE",
      SkillPercentage: "35%",
      Color: "bg-gradient-to-r from-green-700 via-green-500 to-green-300",
      Type: "Backend",
    },
      {
      SkillName: "Mongo DB",
      SkillPercentage: "40%",
      Color: "bg-gradient-to-r from-green-300 via-green-400 to-green-300",
      Type: "Backend",
    },
    {
      SkillName: "MS Word",
      SkillPercentage: "75%",
      Color: "bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500",
      Type: "Other",
    },
    {
      SkillName: "MS Powerpoint",
      SkillPercentage: "60%",
      Color: "bg-gradient-to-r from-red-600 via-red-400 to-red-300",
      Type: "Other",
    },
    {
      SkillName: "Vue",
      SkillPercentage: "40%",
      Color: "bg-gradient-to-r from-green-500 via-green-400 to-green-300",
      Type: "Frontend",
    },
    {
      SkillName: "Redux",
      SkillPercentage: "60%",
      Color: "bg-gradient-to-r from-gray-600 via-gray-700 to-gray-700",
      Type: "Frontend",
    },
  ]
);
    return {
      skillsData,
    };
  },
  data() {
    return {
      type: "Frontend",
      buttonStyle:`px-3 py-1.5 border-2 border-indigo-200 text-indigo-200 rounded-full focus:border-green-300 focus:text-green-400 font-bold
      bg-gradient-to-r from-stone-600 via-slate-800 to-neutral-900 shadow-lg shadow-indigo-500/40
      md:border-indigo-100 md:text-indigo-100 md:focus:border-green-300 md:focus:text-green-300 `
    };
  },
  methods: {
    frontend(){
      this.type = "Frontend"
    },
     backend(){
      this.type = "Backend"
    },
     other(){
      this.type = "Other"
    }
  },
  components: {},
};
</script>

<style>
.skillBg {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  background-image: url("https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg?itok=WTj9-yNz");
}

@media screen and (max-width: 600px) {
  .skillBg {
    background-size: cover;
    background-image: url("https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg?itok=WTj9-yNz");
  }
}
</style>
