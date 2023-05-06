<template>
    <section>
        <ImageGenerator />
        <Examples />
        <Results />
    </section>
</template>

<script>
import ImageGenerator from '../ImageGenerator.vue';
import Examples from '../Examples.vue';
import Results from '../Results.vue';

export default {
    name: 'Hero',
    components: {
        ImageGenerator,
        Examples,
        Results
    }
}
</script>

<style>

</style>