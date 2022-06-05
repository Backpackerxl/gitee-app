<template>
  <div class="app__bottom-bar" v-if="isShowBar">
    <router-link v-for="(item, index) in barArray" :key="index" :to="item.goto">
      <MyButton class="ripple-example-block var-elevation--2" v-ripple="{ color: '#999' }" :data="item" />
    </router-link>
  </div>
  <router-view />
</template>

<script setup>
import { watch, ref } from 'vue';
import { useRouter } from 'vue-router';
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

const router = useRouter();
const isShowBar = ref(true);
watch(() => router.currentRoute.value.path, (toPath) => {
  if (toPath === '/userinfo') {
    isShowBar.value = false;
  }else{
    isShowBar.value = true;
  }
});

</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  user-select: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

body {
  background: rgb(251, 249, 255);
}

.app__bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 50px;
  overflow: hidden;
  background: #fff;
  z-index: 999;
  box-shadow: 0 -1px 4px -1px var(--shadow-key-umbra-opacity);

  a {
    text-decoration: none;
    color: transparent;

    &.router-link-active p,
    &.router-link-active i {
      color: #00b5ad;
    }
  }
}
</style>
