<template>
    <div>
            <input ref="fileInput" type="file" name="image" @change="handleFileUpload"/>
            <button class="send-btn" @click="submitImage">{{ buttonText }}</button>
        
    </div>
  </template>
  
<script>
export default {
    name: "UploadButton",
    data() {
        return {
            file: null,
            imageUrl: null,
        };
    },
    props: {
    buttonText: {
        type: String,
        default: "Send Image",
    },
    },
    methods: {
        /**
         * Send image event.
         * Send the image to the parent component
         */
        sendImage() {
            this.$emit("image-uploaded", this.imageUrl);
        },
        /**
         * Save the file on variable and preview the image.
         * @param {*} event is the event emited when input file changes
         */
        handleFileUpload(event) {
            this.file = event.target.files[0];
            this.previewImage();
        },
        /**
         * Preview the image before uploading it, so the user can see what they're uploading.
         * FileReader convert the file to a data URL.
         */
        previewImage() {
            const reader = new FileReader();
            reader.onload = () => {
                this.imageUrl = reader.result;
            };
            reader.readAsDataURL(this.file);
        },
        async submitImage() {
            const formData = new FormData();
            formData.append('image', this.file);
            console.log(formData);
            const response = await fetch('http://localhost:5000/openai/editimage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body: formData
            });
            const data = await response.json();
            console.log(data);
        }
    },
};
  </script>

<style>
.send-btn {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
}
</style>
  