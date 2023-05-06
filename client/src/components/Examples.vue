<template>
  <section id="examples" class="pt-20">
    <h2 id="section-title" class="text-md font-roboto_regular tracking-wide py-5">EXAMPLES</h2>

    <div data-aos="fade-up" class="image-gallery">
    <div data-aos="fade-up" v-for="(image, index) in images" :key="index" class="image-gallery-item">
      <div class="shadow-md hover:shadow-md transition-all overflow-hidden">
        <img :src="image.src" alt="Image" class="max-h-48 hover:scale-105 transition-transform hover:cursor-pointer">
        <div class="p-3 h-32 flex flex-col justify-between">
          <span class="font-roboto_light">"{{ image.prompt }}"</span>
          <div class="example-options cursor-grab flex mt-3">
            <span v-for="option in image.options" :key="option" class="example-option min-w-fit px-4 py-1 mx-1 backdrop-blur-sm bg-white text-black shadow-sm">
              {{ option.toString() }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  </section>
</template>

<script>
import images from '../content/examples.json';

export default {
    name: 'Examples',
    data() {
      return {
        images: images,
      }
    },
}
</script>

<style>

.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}

.image-gallery-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.example-options {
  box-shadow: inset -7px 0 5px -7px rgba(0,0,0,0.4);
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  /* opcional */
  scrollbar-width: none; /* para Firefox */
  -ms-overflow-style: none; /* para Edge */
}

.example-options::-webkit-scrollbar { /* para Chrome, Safari y Opera */
  display: none;
}

.example-option {
  border: 1px solid #ccc;
  border-radius: 10px;
  color:white;
 /*  background-color: #000; */
}

.backdrop-blur-sm {
    --tw-backdrop-blur: blur(4px);
}

</style>