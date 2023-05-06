<template>
  <div id="toast">
    <div class="toast rounded-md p-3">
      <div class="toast__content">
        <div class="toast__icon">
          <i class="fas fa-check-circle"></i>
        </div>
        <div class="toast__text">
          <p class="text-white text-xl">{{ message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Toast',
    props: {
        message: {
        type: String,
        default: '',
        },
    },
}
</script>

<style>
#toast {
    position: fixed;
    top: 10%;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    pointer-events: none;
    display: flex;
    justify-content: center;
}

.toast {
  background-color: black;
  width: 300px;
  height: fit-content;
}
</style>