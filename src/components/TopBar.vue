<template>
    <var-app-bar :title="title" color="#fff">
        <template #left>
            <var-button text color="transparent" text-color="#fff" @click="goBack">
                <var-icon
                    :name="avater"
                    :size="28" />
            </var-button>
        </template>

        <template #right>
            <var-button text color="transparent" text-color="#fff" >
                <var-icon :name="icon" :color="iconColor || '#00b5ad'" :size="24" />
            </var-button>
        </template>
    </var-app-bar>
</template>

<script setup>
import { Snackbar } from '@varlet/ui';

defineProps({
    avater: String,
    title: String,
    icon: String,
    iconColor: String
});

const goBack = () => {
    Snackbar({
        content: '返回',
        position: 'top'
    });
}
</script>

<style lang="less" scoped>
.var-icon__image {
    border-radius: 50%;
}

.var-elevation--3 {
    box-shadow: none;
}

.var-app-bar {
    color: #000;
    font-weight: 700;
    font-family: Helvetica;
}
</style>