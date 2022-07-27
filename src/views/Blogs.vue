<template>
  <div class="bg-slate-100">
    <h1 class="text-indigo-800 text-center text-3xl pt-3">Blogs</h1>
    <div
      class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-8 py-12"
    >
      <div
        v-for="(blogs, index) in blogData"
        :key="index"
        class="grid grid-cols-1 my-5 rounded-2xl bg-slate-300 wow animate__animated animate__flipInY"
      >
        <div class="place-self-center">
          <img :src="blogs.BlogImage" class="rounded-tr-2xl rounded-tl-2xl" />
        </div>
        <div
          class="mt-2 pb-3 grid grid-cols-1 justify-center p-3 bg-slate-900 rounded-br-2xl rounded-bl-2xl"
        >
          <h1 class="text-md text-center text-slate-100">{{ blogs.Title }}</h1>
          <h1 class="text-xs place-self-center mt-2 mb-5 text-slate-100">
            {{ blogs.BlogDate }}
          </h1>
          <button
            class="px-4 py-2 border-2 border-indigo-300 rounded-full place-self-center"
          >
            <a :href="blogs.BlogLink" class="text-indigo-300"> Open</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";
import Blog1 from "../assets/images/BlogsImages/Blog1.jpg";
import Blog2 from "../assets/images/BlogsImages/Blog2.jpg";
import Blog3 from "../assets/images/BlogsImages/Blog3.jpg";
import Blog4 from "../assets/images/BlogsImages/Blog4.jpg";
import Blog5 from "../assets/images/BlogsImages/Blog5.jpg";
import Blog6 from "../assets/images/BlogsImages/Blog6.jpg";
import Blog7 from "../assets/images/BlogsImages/Blog7.jpg";
import Blog8 from "../assets/images/BlogsImages/Blog8.jpg";
export default {
  data() {
    return {
      blogData: [
        {
          Title: "Glass Effect in React",
          BlogImage: Blog1,
          BlogDate: "2 Feb 2022",
          BlogLink:
            "https://dev.to/shubhamtiwari909/glass-effect-in-react-36p7",
        },
        {
          Title: "Higher Order Functions in Javascript",
          BlogImage: Blog2,
          BlogDate: "25 Jan 2022",
          BlogLink:
            "https://dev.to/shubhamtiwari909/higher-order-function-in-javascript-1i5h",
        },
        {
          Title: "Arrow Functions in Javascript",
          BlogImage: Blog3,
          BlogDate: "24 Jan 2022",
          BlogLink:
            "https://dev.to/shubhamtiwari909/arrow-function-in-javascript-46gd",
        },
        {
          Title: "Introduction to Tailwind Best CSS Framework",
          BlogImage: Blog4,
          BlogDate: "6 Jan 2022",
          BlogLink:
            "https://dev.to/shubhamtiwari909/introduction-to-tailwind-best-css-framework-1gdj",
        },
        {
          Title: "Text-to-speech in React",
          BlogImage: Blog5,
          BlogDate: "22 Dec 2021",
          BlogLink:
            "https://dev.to/shubhamtiwari909/text-to-speech-in-reactjs-52ml",
        },
        {
          Title: "Helpful Websites for Frontend Web Development",
          BlogImage: Blog6,
          BlogDate: "4 Dec 2021",
          BlogLink:
            "https://dev.to/shubhamtiwari909/helpful-websites-for-frontend-web-development-55a8",
        },
        {
          Title: "Bubble Sort Algorithm",
          BlogImage: Blog7,
          BlogDate: "18 Nov 2021",
          BlogLink:
            "https://dev.to/shubhamtiwari909/bubble-sort-algorithm-1o5e",
        },
        {
          Title: "Best VSCode Extensions for Web Development",
          BlogImage: Blog8,
          BlogDate: "19 Dec 2021",
          BlogLink:
            "https://dev.to/shubhamtiwari909/best-vs-code-extensions-for-web-development-2lk3",
        },
      ],
    };
  },
};
</script>

<style></style>
