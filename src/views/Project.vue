<template>
  <div
    class="grid grid-cols-1 lg:place-content-center lg:gap-28 place-content-center py-10 px-3 bg-slate-100"
  >
    <div
      v-for="project in projectData"
      :key="project.ProjectTitle"
      class="rounded-2xl my-5 mx-2 md:mx-16 md:grid md:grid-cols-2 wow animate__animated animate__rubberBand Card"
    >
      <div>
        <img :src="project.ProjectImage" style="border-radius: 5%" />
      </div>

      <div :id="project.ProjectId">
        <div class="flex justify-between pt-4 pb-4 mx-3 md:mx-5">
          <h1 class="text-2xl text-center text-indigo-900">
            {{ project.ProjectTitle }}
          </h1>
          <h1
            class="text-xs md:text-sm text-indigo-900 text-center rounded-lg mt-2.5"
          >
            {{ project.Date }}
          </h1>
        </div>
        <div class="px-3">
          <p class="text-xs md:text-sm wrap-words">
            {{ project.ProjectDescription }}
          </p>

          <p class="mt-5 text-center text-indigo-700">Technologies Used</p>
          <div class="grid grid-cols-2 md:grid-cols-4 md:my-3">
            <div
              v-for="(languages, index) in project.LanguagesUsed"
              :key="index"
              class="text-xs text-center mx-2 my-2 md:text-sm px-3 py-1 border-2 border-violet-300 rounded-full"
            >
              <a
                :href="languages.languageLink"
                target="_blank"
                class="text-indigo-800"
                >{{ languages.languageName }}</a
              >
            </div>
          </div>
          <div class="flex justify-center">
            <button
              class="border-2 border-blue-300 px-4 py-2 rounded-full mt-3 mb-2"
            >
              <a
                :href="project.ProjectLink"
                target="_blank"
                class="text-blue-600"
                >Open</a
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";
import { ref } from "vue";
import {ProjectData} from './SmallComponents/ProjectData'


export default {
  setup() {
    const projectData = ref(ProjectData);

    return {
      projectData,
    };
  },
};
</script>

<style scoped>
.Card {
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.048),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.069),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.085),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.101),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.122),
    100px 100px 80px rgba(0, 0, 0, 0.17);
}
</style>
