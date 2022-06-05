<template>
  <div class="about">
    <TopBar title="搜索" :icon="mdiMagnify" iconColor="#444" boxShadow="0 1px 5px -1px" />
    <h1>This is an search</h1>
  </div>
</template>

<script setup>
import TopBar from '../components/TopBar.vue';
import { mdiMagnify } from "@mdi/js"
</script>
