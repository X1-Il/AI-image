<template>
    <main>
        <h1 class="pt-20">Editor Page</h1>
        <UploadButton buttonText="Send Image" @image-uploaded="handleImageUpload" />
        <!-- image selected preview -->
        <div v-if="imageUrl">
            <img :src="imageUrl" alt="Imagen seleccionada">
        </div>
    </main>
</template>

<script>
import UploadButton from '../components/editor/UploadButton.vue';
import { editImageRequest } from '../utils/openai';

export default {
    data(){
        return {
            imageUrl: null,
        }
    },
    components: {
        UploadButton
    },
    methods: {
    handleImageUpload(imageDataUrl) {
        console.log('Evento para subir imagen!', imageDataUrl)
    },
  },
}
</script>