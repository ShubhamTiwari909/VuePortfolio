<template>
  <div class="pt-24 lg:pt-40 flex justify-center px-10 pb-32 bg-slate-200">
    <div
      class="p-4 bg-gradient-to-r from-slate-800 via-slate-900 to-black rounded-lg"
     
    >
      <h1 class="text-slate-100 text-4xl my-2">Summary</h1>
      <p class="text-slate-100">
        I am a Graduate in Bachelor's of Computer Applications and learnt some
        skills related to the field of web development
      </p>
      <button
        class="px-4 py-2 bg-transparent border-2 border-indigo-400 rounded-lg text-indigo-400 my-2 focus:outline-none"
        @click="showHobbies = !showHobbies"
      >
        Hobbies
      </button>
      <div v-show="showHobbies" class="bg-slate-100 p-2 rounded-2xl mt-5">
        <ul class="list-none my-3 flex flex-wrap gap-2">
          <li
            class="p-2 bg-slate-900 text-slate-200 rounded-xl border-2 border-indigo-400"
          >
            Badminton
          </li>
          <li
            class="p-2 bg-slate-900 text-slate-200 rounded-xl border-2 border-indigo-400"
          >
            Chess
          </li>
          <li
            class="p-2 bg-slate-900 text-slate-200 rounded-xl border-2 border-indigo-400"
          >
            Blogging
          </li>
          <li
            class="p-2 bg-slate-900 text-slate-200 rounded-xl border-2 border-indigo-400"
          >
            Reading Books
          </li>
          <li
            class="p-2 bg-slate-900 text-slate-200 rounded-xl border-2 border-indigo-400"
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
