<template>
    <div class="user_page_main">
        <var-app-bar color="#fff">
            <template #left>
                <var-button round text color="transparent" text-color="#fff"
                    v-ripple="{ color: 'var(--picker-cancel-button-text-color)' }" @click="goBack">
                    <my-icon :name="mdiArrowLeft" size="24" color="#000"></my-icon>
                </var-button>
            </template>
            <template #right>
                <var-space :size="[10, 10]">
                    <var-button round text color="transparent" text-color="#ffffff"
                        v-ripple="{ color: 'var(--picker-cancel-button-text-color)' }">
                        <my-icon :name="mdiShareVariantOutline" size="24" color="#00b5ad"></my-icon>
                    </var-button>
                    <var-button round text color="transparent" text-color="#ffffff"
                        v-ripple="{ color: 'var(--picker-cancel-button-text-color)' }">
                        <var-icon name="cog-outline" :size="24" color="#00b5ad" />
                    </var-button>
                </var-space>
            </template>
        </var-app-bar>
        <div class="user-info__basic-infomation">
            <div class="user-info__avater-name">
                <div>
                    <var-image width="55px" height="55px" fit="cover" :radius="8"
                        src="https://portrait.gitee.com/uploads/avatars/user/2783/8349130_backpackerxl_1638198263.png" />
                </div>
                <div class="name">
                    <h3 class="space-name">backpackerxl</h3>
                    <p class="name-txt">千倒流</p>
                </div>
            </div>
            <div class="me-can-play">
                <var-space align="center">
                    <var-chip :round="false" size="mini">
                        java
                    </var-chip>
                    <var-chip :round="false" size="mini">
                        python
                    </var-chip>
                    <var-chip :round="false" size="mini">
                        javascript
                    </var-chip>
                    <var-chip :round="false" size="mini">
                        scala
                    </var-chip>
                </var-space>
            </div>
            <div class="information">
                <p class="text">all in one all in one all in one all in one all in one all in one all in one all in one.
                </p>
            </div>
            <div class="user-item">
                <div class="item">
                    <my-icon :name="mdiAccountMultiple" size="16" color="#888"></my-icon>
                    <span class="item-right">环太平洋</span>
                </div>
                <div class="item">
                    <my-icon :name="mdiMapMarkerOutline" size="16" color="#888"></my-icon>
                    <span class="item-right">四川省/达州市</span>
                </div>
                <div class="item">
                    <my-icon :name="mdiLinkVariant" size="16" color="#888"></my-icon>
                    <span class="item-right"><a href="http://1.14.60.30:8888/">http://1.14.60.30:8888/</a></span>
                </div>
                <div class="item">
                    <my-icon :name="mdiAccountOutline" size="16" color="#888"></my-icon>
                    <span class="item-right">0 个粉丝 <span class="dot">·</span> 0 个关注</span>
                </div>
            </div>
        </div>

        <div class="user-info__project">
            <div class="title">
                <my-icon :name="mdiPinOutline" size="26" color="#888"></my-icon>
                <span class="nice">精选项目</span>
            </div>

            <div class="project-list">
                <div v-ripple="{ color: 'var(--picker-cancel-button-text-color)' }" class="item">
                    <div class="avater">
                        <var-image width="20px" height="20px" fit="cover" :radius="4"
                            src="https://portrait.gitee.com/uploads/avatars/user/2783/8349130_backpackerxl_1638198263.png" />

                        <span class="name">Backpackerxl</span>
                    </div>
                    <p>blogplus</p>
                    <p>博客项目</p>
                    <div class="bottom">
                        <div class="left">
                            <span class="dot"></span>
                            <span class="langues">HTML</span>
                        </div>
                        <div class="right">
                            <my-icon :name="mdiStar" size="16" color="#ffe100"></my-icon>
                            <span class="num">1</span>
                        </div>
                    </div>
                </div>

                <div v-ripple="{ color: 'var(--picker-cancel-button-text-color)' }" class="item">
                    <div class="avater">
                        <var-image width="20px" height="20px" fit="cover" :radius="4"
                            src="https://portrait.gitee.com/uploads/avatars/user/2783/8349130_backpackerxl_1638198263.png" />

                        <span class="name">Backpackerxl</span>
                    </div>
                    <p>blogplus</p>
                    <p>博客项目</p>
                    <div class="bottom">
                        <div class="left">
                            <span class="dot"></span>
                            <span class="langues">HTML</span>
                        </div>
                        <div class="right">
                            <my-icon :name="mdiStar" size="16" color="#ffe100"></my-icon>
                            <span class="num">1</span>
                        </div>
                    </div>
                </div>

                <div v-ripple="{ color: 'var(--picker-cancel-button-text-color)' }" class="item">
                    <div class="avater">
                        <var-image width="20px" height="20px" fit="cover" :radius="4"
                            src="https://portrait.gitee.com/uploads/avatars/user/2783/8349130_backpackerxl_1638198263.png" />

                        <span class="name">Backpackerxl</span>
                    </div>
                    <p>blogplus</p>
                    <p>博客项目</p>
                    <div class="bottom">
                        <div class="left">
                            <span class="dot"></span>
                            <span class="langues">HTML</span>
                        </div>
                        <div class="right">
                            <my-icon :name="mdiStar" size="16" color="#ffe100"></my-icon>
                            <span class="num">1</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="more-infomation">
            <div class="more-list">
                <div class="box" v-ripple="{ color: 'var(--picker-cancel-button-text-color)' }">
                    <div>
                        我的仓库
                    </div>
                    <div class="num">
                        40
                    </div>
                </div>
                <div class="box" v-ripple="{ color: 'var(--picker-cancel-button-text-color)' }">
                    <div>
                        我的组织
                    </div>
                    <div class="num">
                        0
                    </div>
                </div>
                <div class="box" v-ripple="{ color: 'var(--picker-cancel-button-text-color)' }">
                    <div>
                        我的星选集
                    </div>
                    <div class="num">
                        11
                    </div>
                </div>
                <div class="box" v-ripple="{ color: 'var(--picker-cancel-button-text-color)' }">
                    <div>
                        我的关注
                    </div>
                    <div class="num">
                        0
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

import {
    mdiArrowLeft,
    mdiShareVariantOutline,
    mdiAccountMultiple,
    mdiMapMarkerOutline,
    mdiLinkVariant,
    mdiAccountOutline,
    mdiStar,
    mdiPinOutline
} from '@mdi/js';
import MyIcon from '../components/MyIcon';
import "../assets/less/userinfo.less";

const router = useRouter();

function goBack() {
    setTimeout(()=>{
        router.back();
    },500);
}

onMounted(() => {
    const appBar = document.querySelector('.var-app-bar');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 10) {
            appBar.classList.add('active');
        } else {
            appBar.classList.remove('active');
        }
    });
});

</script>

<style lang="less" scoped>
.user_page_main {
    overflow: hidden;
}

.var-app-bar {
    box-shadow: none;
    position: sticky;
    top: 0;
    left: 0;
    transition: all .1s ease-out;

    &.active {
        box-shadow: 0 2px 5px -1px var(--shadow-key-umbra-opacity);
    }
}
</style>
