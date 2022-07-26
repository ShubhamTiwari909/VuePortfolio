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

          <p class="mt-4 text-center text-indigo-700">Technologies Used</p>
          <div class="grid grid-cols-2 md:grid-cols-4 md:my-2">
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
import Project1 from "../assets/images/Project1.jpg";
import Project2 from "../assets/images/Project2.jpg";
import Project3 from "../assets/images/Project3.jpg";
import Project4 from "../assets/images/Project4.jpg";
import Project5 from "../assets/images/Project5.jpg";

export default {
  data() {
    return {
      projectData: [
        {
          ProjectId: "one",
          ProjectTitle: "E - Recipes",
          ProjectLink: "https://e-recipes.netlify.app/",
          ProjectImage: Project1,
          Date: "June 2022",
          LanguagesUsed: [
            {
              languageName: "HTML5",
              languageLink: "https://www.w3schools.com/html/",
            },
            {
              languageName: "CSS3",
              languageLink: "https://www.w3schools.com/css/",
            },
            {
              languageName: "JAVASCRIPT",
              languageLink: "https://www.w3schools.com/js/",
            },
            {
              languageName: "TAILWIND",
              languageLink: "https://tailwindcss.com/",
            },
            {
              languageName: "REACT JS",
              languageLink: "https://reactjs.org/",
            },
          ],
          ProjectDescription:
            "This Project is related to Food Recipes Finder where a user can search food and get the data related to it like summary, steps to cook , ingredients,health score,veg or nonveg , etc.It is Created using Spoonculer API",
        },
        {
          ProjectId: "two",
          ProjectTitle: "Waadu Blogs",
          ProjectLink: "https://waadu-blog.netlify.app/",
          ProjectImage: Project2,
          Date: "May 2022",
          LanguagesUsed: [
            {
              languageName: "HTML5",
              languageLink: "https://www.w3schools.com/html/",
            },
            {
              languageName: "CSS3",
              languageLink: "https://www.w3schools.com/css/",
            },
            {
              languageName: "JAVASCRIPT",
              languageLink: "https://www.w3schools.com/js/",
            },
            {
              languageName: "TAILWIND",
              languageLink: "https://tailwindcss.com/",
            },
            {
              languageName: "BOOTSTRAP 5",
              languageLink:
                "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
            },
            {
              languageName: "REACT JS",
              languageLink: "https://reactjs.org/",
            },
          ],
          ProjectDescription:
            "This Project is related to Blog creating website where we can create blogs with images using different categories.Its just a Design Project.",
        },
        {
          ProjectId: "three",
          ProjectTitle: "Image Editor",
          ProjectLink: "https://waadu-image-editor.netlify.app/",
          ProjectImage: Project4,
          Date: "June 2022",
          LanguagesUsed: [
            {
              languageName: "HTML5",
              languageLink: "https://www.w3schools.com/html/",
            },
            {
              languageName: "CSS3",
              languageLink: "https://www.w3schools.com/css/",
            },
            {
              languageName: "JAVASCRIPT",
              languageLink: "https://www.w3schools.com/js/",
            },
            {
              languageName: "TAILWIND",
              languageLink: "https://tailwindcss.com/",
            },
            {
              languageName: "REACT JS",
              languageLink: "https://reactjs.org/",
            },
          ],
          ProjectDescription:
            "This Project is related to Image Editing. It has lots of options like blue,opacity,saturation,hue,rotation,contrast",
        },
        {
          ProjectId: "four",
          ProjectTitle: "Knowledge Earth",
          ProjectLink: "https://knowledge-earth2k99.netlify.app/",
          ProjectImage: Project3,
          Date: "January 2022",
          LanguagesUsed: [
            {
              languageName: "HTML5",
              languageLink: "https://www.w3schools.com/html/",
            },
            {
              languageName: "CSS3",
              languageLink: "https://www.w3schools.com/css/",
            },
            {
              languageName: "JAVASCRIPT",
              languageLink: "https://www.w3schools.com/js/",
            },
            {
              languageName: "TAILWIND",
              languageLink: "https://tailwindcss.com/",
            },
            {
              languageName: "REACT JS",
              languageLink: "https://reactjs.org/",
            },
          ],
          ProjectDescription:
            "This Project is related to Wikipedia searching Api where a user can search things and then can read the whole content by redirecting to that wikipedia page and it also has a voice assistance",
        },
        {
          ProjectId: "five",
          ProjectTitle: "E-Quotes",
          ProjectLink: "https://e-quotes-2099.netlify.app/",
          ProjectImage: Project5,
          Date: "july 2022",
          LanguagesUsed: [
            {
              languageName: "HTML5",
              languageLink: "https://www.w3schools.com/html/",
            },
            {
              languageName: "CSS3",
              languageLink: "https://www.w3schools.com/css/",
            },
            {
              languageName: "JAVASCRIPT",
              languageLink: "https://www.w3schools.com/js/",
            },
            {
              languageName: "TAILWIND",
              languageLink: "https://tailwindcss.com/",
            },
            {
              languageName: "REACT JS",
              languageLink: "https://reactjs.org/",
            },
            {
              languageName: "FIREBASE",
              languageLink: "https://firebase.google.com/",
            },
          ],
          ProjectDescription:
            "This Project is related to Quotes reading and writing app with likes/dislikes feature,comment section,downloading quotes,etc",
        },
      ],
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
