<template>
  <div class="home">
    <TopBar 
    :avater="avater.name"
    title="首页"
    icon="plus-circle-outline"
    />
    <div>
      dk are you ok
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import TopBar from '../components/TopBar.vue';

const avater = reactive({
  name: '../assets/favicon.ico'
});

// https://portrait.gitee.com/uploads/avatars/user/2783/8349130_backpackerxl_1638198263.png

</script>
