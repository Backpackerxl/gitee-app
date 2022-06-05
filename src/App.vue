<template>
  <div class="me-bottom-bar">
    <router-link v-for="(item, index) in barArray" :key="index" :to="item.goto">
      <MyButton :data="item" />
    </router-link>
  </div>
  <router-view />
</template>

<script setup>

import MyButton from './components/MyButton.vue';

const barArray = [
  {
    goto: '/',
    label: '首页',
    name: ['home-outline', 'home'],
    setBorder: [0, 60, 60, 0]
  },
  {
    goto: '/notifications',
    label: '通知',
    name: ['bell-outline', 'bell'],
    setBorder: [60]
  },
  {
    goto: '/search',
    label: '搜索',
    name: ['magnify', 'magnify'],
    setBorder: [60, 0, 0, 60]
  }
];

</script>

<style lang="less">
.me-bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 2px 3px rgb(0, 0, 0, .1);

  a {
    text-decoration: none;
    color: #444;

    &.router-link-active p,
    &.router-link-active i {
      color: #00b5ad;
    }
  }
}
</style>
