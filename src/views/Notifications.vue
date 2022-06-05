<template>
  <div class="notifications">
    <TopBar title="通知" :icon="mdiFilterVariant" iconColor="#00b5ad" boxShadow="0 1px 5px -1px" />
    <div>
      this is notifications
    </div>
  </div>
</template>

<script setup>
import TopBar from '../components/TopBar.vue';
import { mdiFilterVariant } from "@mdi/js";
</script>