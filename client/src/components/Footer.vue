<template>
  <footer class="w-full flex justify-center py-5 mt-10 flex-col items-center font-roboto_light text-gray-400">
    <span>
      Developed by <a href="https://github.com/x1-il" target="_blank" class="text-gray-700 font-roboto_regular">@ibrahim_laklaa</a>
    </span>
    <span class="py-4">
      with
    </span>
    <div class="flex">
      <img src="@/assets/icons/vue.svg" alt="" class="w-10">
      <span class="flex self-center text-lg px-5"> & </span>
      <img src="@/assets/icons/openai.svg" alt="" class="w-10">
    </div>
  </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style>

footer {
  /* shadow top */
  box-shadow: 0px -5px 5px -5px rgba(0, 0, 0, 0.1);
}

</style>