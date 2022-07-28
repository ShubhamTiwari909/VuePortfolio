<template>
  <div class="grid align-items-center py-10 h-96 bg-slate-900 bgImage">
    <div class="p-4">
      <div v-bind:class="showContact">
        <a
          href="https://www.instagram.com/s_h.u_b.h_a.m_2k99/"
          target="_blank"
          class="justify-self-center animate__animated animate__backInLeft"
          ><i class="fa-brands fa-instagram"></i
        ></a>
        <a
          href="https://github.com/ShubhamTiwari909"
          target="_blank"
          class="justify-self-center animate__animated animate__backInLeft"
          ><i class="fa-brands fa-github"></i
        ></a>
        <a
          href="https://www.linkedin.com/in/shubham-tiwari-b7544b193/"
          target="_blank"
          class="justify-self-center animate__animated animate__backInDown"
          ><i class="fa-brands fa-linkedin"></i
        ></a>
        <a
          href="https://wa.me/919627253516"
          class="justify-self-center animate__animated animate__backInRight"
          ><i class="fa-brands fa-whatsapp"></i
        ></a>
        <a
          href="mailto:shubhmtiwri00@gmail.com"
          class="justify-self-center animate__animated animate__backInRight"
          ><i class="fa-solid fa-envelope-circle-check"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showContact: `bg-slate-200 grid grid-cols-5 gap-2 md:gap-4 border-2 border-violet-400 text-violet-500 rounded-2xl
        px-3 py-6 text-2xl md:text-4xl`,
    };
  },
};
</script>

<style scoped>
.bgImage {
  background-image: url('https://media.istockphoto.com/photos/emails-with-blurred-city-lights-picture-id1134247993?k=20&m=1134247993&s=612x612&w=0&h=2m4qwm0V4V-a5QOP5n7tSC3njlxo1q7WsMBW82foJ7Y=');
  background-size: cover;
}

@media  screen and (max-width:600px){
  .bgImage{
    background-image: url('https://png.pngtree.com/thumb_back/fh260/background/20220313/pngtree-creative-synthesis-contact-future-technology-image_1059813.jpg')
  }
}
</style>
