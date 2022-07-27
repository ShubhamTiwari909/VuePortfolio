<template>
  <div
    class="grid align-items-center py-10 h-96"
    v-bind:class="[darkMode ? 'bg-slate-200' : 'bg-slate-900']"
  >
    <div class="p-4">
      <h1
        class="text-center text-3xl pt-3 pb-6"
        v-bind:class="[contactSection ? 'text-indigo-400' : 'text-indigo-800 ']"
      >
        Contacts
      </h1>
      <div
        v-bind:class="[
          contactSection ? showContact : hideContact,
          darkMode ? 'bg-slate-900' : 'bg-slate-200',
        ]"
      >
        <a
          href="https://www.instagram.com/s_h.u_b.h_a.m_2k99/"
          target="_blank"
          class="justify-self-center"
          v-bind:class="[
            contactSection ? 'animate__animated animate__backInLeft' : '',
          ]"
          ><i class="fa-brands fa-instagram"></i
        ></a>
        <a
          href="https://github.com/ShubhamTiwari909"
          target="_blank"
          class="justify-self-center"
          v-bind:class="[
            contactSection ? 'animate__animated animate__backInLeft' : '',
          ]"
          ><i class="fa-brands fa-github"></i
        ></a>
        <a
          href="https://www.linkedin.com/in/shubham-tiwari-b7544b193/"
          target="_blank"
          class="justify-self-center"
          v-bind:class="[
            contactSection ? 'animate__animated animate__backInDown' : '',
          ]"
          ><i class="fa-brands fa-linkedin"></i
        ></a>
        <a
          href="https://wa.me/919627253516"
          class="justify-self-center"
          v-bind:class="[
            contactSection ? 'animate__animated animate__backInRight' : '',
          ]"
          ><i class="fa-brands fa-whatsapp"></i
        ></a>
        <a
          href="mailto:shubhmtiwri00@gmail.com"
          class="justify-self-center"
          v-bind:class="[
            contactSection ? 'animate__animated animate__backInRight' : '',
          ]"
          ><i class="fa-solid fa-envelope-circle-check"></i
        ></a>
      </div>
    </div>
    <button
      class="place-self-center mt-4 px-4 py-2 rounded-full border-2 focus:outline-none"
      v-bind:class="[
        contactSection
          ? 'border-indigo-400 text-indigo-400'
          : 'border-indigo-600 text-indigo-600',
      ]"
      @click="showContacts"
    >
      {{ contactSection ? "Hide" : "Show" }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactSection: false,
      darkMode: true,
      showContact: `showContact grid grid-cols-5 gap-2 md:gap-4 border-2 border-violet-400 text-violet-500 rounded-2xl
        px-3 py-6 text-2xl md:text-4xl`,
      hideContact: "hideContact",
    };
  },
  methods: {
    showContacts() {
      if (this.contactSection) {
        this.contactSection = false;
        this.darkMode = true;
      } else {
        this.contactSection = true;
        this.darkMode = false;
      }
    },
  },
};
</script>

<style scoped>
.showContact {
  visibility: visible;
}
.hideContact {
  visibility: hidden;
}
</style>
