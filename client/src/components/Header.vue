<template>
	<header data-aos="fade-down" class="w-full bg-white fixed top-0 shadow-sm z-20">
		<GithubCorner :url="url" />
		<nav class="flex p-3 max-w-5xl m-auto justify-between md:justify-start px-5">
			<div class="logo">
				<img src="@/assets/logo.svg" alt="" class="w-8">
			</div>
			<a id="github-link" :href="url" class="self-center text-sm font-roboto_light">See on Github ></a>
		</nav>
	</header>
</template>

<script>
import GithubCorner from './GithubCorner.vue'

export default {
    name: 'Header',
    components: {
        GithubCorner
    },
	data() {
		return {
			url: 'https://github.com/alexdeploy/openai-app_image-generator'
			// ...
		}
	},
}
</script>

<style>
@media (min-width: 500px) {
  #github-link {
    display: none;
  }
}
</style>