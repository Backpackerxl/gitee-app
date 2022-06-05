<template>
  <var-pull-refresh success-bg-color="#00b5ad" success-color="#fff" v-model="isRefresh" @refresh="refresh">
    <div class="home">
      <top-bar title="首页" :icon="mdiPlusCircleOutline" iconColor="#00b5ad" boxShadow="none" />
      <div class="my-work">
        <h4 class="title">工作区</h4>
        <my-cell v-for="(item, i) in myWorkList" :key="i" :content="item.content">
          <template #icon>
            <div :class="'my-cell_svgIcon ' + item.suffixClass">
              <svg-icon type="mdi" :path="item.path"></svg-icon>
            </div>
          </template>
        </my-cell>
      </div>

      <div class="favorites">
        <div class="title">
          <h4>心仪项目</h4>
          <var-button text color="transparent" text-color="#00b5ad">修改</var-button>
        </div>
        <div class="home-list" ref="homeList">
          <my-cell v-for="(item, i) in data" :key="i" :content="item.content">
            <template #icon>
              <img :src="item.imgPath" alt="avater">
            </template>
          </my-cell>
        </div>
      </div>
    </div>
  </var-pull-refresh>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import MyCell from '../components/MyCell';
import TopBar from '../components/TopBar';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiPlusCircleOutline, mdiBook, mdiAlertCircleOutline, mdiAccountMultipleOutline } from '@mdi/js';

const isRefresh = ref(false);

const data = reactive([
  {
    content: 'Backpackerxl / book-store-java',
    imgPath: 'https://portrait.gitee.com/uploads/avatars/user/2783/8349130_backpackerxl_1638198263.png'
  },
  {
    content: 'Backpackerxl / book-story-page',
    imgPath: 'https://portrait.gitee.com/uploads/avatars/user/2783/8349130_backpackerxl_1638198263.png'
  }
]);

const refresh = () => {
  setTimeout(() => {
    data.push({
      content: 'Backpackerxl / jdbc',
      imgPath: 'https://portrait.gitee.com/uploads/avatars/user/2783/8349130_backpackerxl_1638198263.png'
    })
    isRefresh.value = false
  }, 1500);
}

const myWorkList = [
  {
    content: '项目问题',
    suffixClass: 'bg-green',
    path: mdiAlertCircleOutline
  },
  {
    content: '我的仓库',
    suffixClass: 'bg-purple',
    path: mdiBook
  },
  {
    content: '我的组织',
    suffixClass: 'bg-yellow',
    path: mdiAccountMultipleOutline
  }
];

const homeList = ref(null);

onMounted(() => {
  const bottomBar = document.querySelector('.app__bottom-bar');
  homeList.value.style.maxHeight = window.innerHeight - homeList.value.offsetTop - bottomBar.offsetHeight + 'px';
});

</script>


<style lang="less" scoped>
.my-work {
  padding-bottom: 10px;
  background: #fff;

  .title {
    width: 100%;
    padding: 5px 20px;
    font-size: 15px;
  }
}

.favorites {
  border-top: .5px solid #999;
  padding-top: 10px;
  background: #fff;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;

    h4 {
      font-size: 15px;
    }
  }

  .home-list {
    overflow: auto;
  }
}
</style>