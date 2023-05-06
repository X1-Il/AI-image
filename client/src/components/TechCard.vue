<template>
  <div id="tech-card" class="font-sf_bold text-4xl flex flex-col items-center border-1 border-x border-y border-solid justify-center">
    <div class="p-2 bg-gray-200 rounded-xl mb-5">
        <img src="../assets/icons/openai.svg" alt="" class="h-full w-10">
    </div>
        <span>Open AI Engine</span>
    </div>
</template>

<script>
export default {
    name: 'TechCard'
}
</script>

<style>

/* codepen component link
https://codepen.io/georgehastings/pen/xgwxgo
*/

#tech-card > svg {
    fill: #275c9c;
    animation: textColor 10s ease infinite;
}

#tech-card {
    border-color: rgb(24 24 27);
    position: relative;
    border-radius: 50px;
    width: 500px;
    height: 500px;
    text-align: center;
    color: #252B37;
    background-color: rgb(11 10 12);
    animation: textColor 10s ease infinite;
}
#tech-card:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  height: 500px;
  width: 500px;
  margin: 0 auto;
  transform: scale(0.75);
  -webkit-filter: blur(5vw);
  -moz-filter: blur(5vw);
  -ms-filter: blur(5vw);
  filter: blur(5vw);
  background: linear-gradient(270deg, #0fffc1, #7e0fff);
  background-size: 1000px 1000px;
  animation: animateGlow 10s ease infinite;
}
@keyframes animateGlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes textColor {
  0% {
    color: #7e0fff;
  }
  50% {
    color: #0fffc1;
  }
  100% {
    color: #7e0fff;
  }
}
</style>