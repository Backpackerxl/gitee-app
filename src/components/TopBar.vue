<template>
    <var-app-bar :style="'box-shadow: ' + boxShadow + ' var(--shadow-key-umbra-opacity);'" :title="title" color="#fff">
        <template #left>
            <var-button text color="transparent" text-color="#fff" @click="goUser">
                <var-icon :name="avater.name" :size="28" />
            </var-button>
        </template>

        <template #right>
            <var-button text color="transparent" text-color="#fff">
                <svg-icon type="mdi" :path="icon" :style="'color: ' + iconColor + ';'"></svg-icon>
            </var-button>
        </template>
    </var-app-bar>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { useRouter } from 'vue-router';
import { reactive } from 'vue';

const avater = reactive({
    name: 'https://portrait.gitee.com/uploads/avatars/user/2783/8349130_backpackerxl_1638198263.png'
});

defineProps({
    title: String,
    icon: String,
    boxShadow: String,
    iconColor: String
});

const router = useRouter();

const goUser = () => {
    router.push({
        path: '/userinfo'
    });
}
</script>

<style lang="less" scoped>
.var-icon__image {
    border-radius: 50%;
}

.var-app-bar {
    color: #000;
    font-weight: 700;
    font-family: Helvetica;
}
</style>