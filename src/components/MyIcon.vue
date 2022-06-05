<template>
    <svg-icon :width="size" :height="size" :style="style" type="mdi" :path="name"></svg-icon>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
const props = defineProps({
    name: String,
    size: String,
    color: String
});

const style = 'color: ' + props.color + ';';

</script>
