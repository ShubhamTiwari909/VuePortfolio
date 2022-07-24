<template>
  <div class="mt-24 lg:mt-40 flex justify-center mx-10 mb-10">
    <div
      class="p-4 bg-gradient-to-r from-slate-800 via-slate-900 to-black rounded-lg"
     
    >
      <h1 class="text-slate-100 text-4xl my-2">Summary</h1>
      <p class="text-slate-100">
        I am a Graduate in Bachelor's of Computer Applications and learnt some
        skills related to the field of web development
      </p>
      <button
        class="px-4 py-2 bg-transparent border-2 border-indigo-400 rounded-lg text-indigo-400 my-2"
        @click="showHobbies = !showHobbies"
      >
        Hobbies
      </button>
      <div v-show="showHobbies">
        <ul class="list-none my-3 flex flex-wrap gap-2">
          <li
            class="px-2 py-1 bg-slate-200 text-slate-800 rounded-xl border-2 border-indigo-400"
          >
            Badminton
          </li>
          <li
            class="px-2 py-1 bg-slate-200 text-slate-800 rounded-xl border-2 border-indigo-400"
          >
            Chess
          </li>
          <li
            class="px-2 py-1 bg-slate-200 text-slate-800 rounded-xl border-2 border-indigo-400"
          >
            Blogging
          </li>
          <li
            class="px-2 py-1 bg-slate-200 text-slate-800 rounded-xl border-2 border-indigo-400"
          >
            Reading Books
          </li>
          <li
            class="px-2 py-1 bg-slate-200 text-slate-800 rounded-xl border-2 border-indigo-400"
          >
            Mathematics
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Summary",
  data() {
    return {
      showHobbies: false,
    };
  },
};
</script>

<style scoped>

</style>
