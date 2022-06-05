<template>
    <var-button :style="border" class="me-bottom-btn" text color="transparent" text-color="#fff">
        <var-icon :name='newname.name' :size="24" />
        <p>{{ label }}</p>
    </var-button>
</template>

<script setup>
import { watch, reactive, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps({
    data: Object
});

const { goto, name, label, setBorder } = props.data;

const border = `border-radius: ${setBorder.join('px ')}px;`;

let newname = reactive({
    name: name[0]
});

const router = useRouter();

onBeforeMount(() => {
    const path = router.currentRoute.value.path;
    if (path === goto && path === '/') {
        newname.name = name[1];
    }
});

watch(() => router.currentRoute.value.path, (toPath) => {
    if (goto === toPath) {
        if (toPath === '/') {
            newname.name = name[1];
        } else if (toPath === '/notifications') {
            newname.name = name[1];
        }
    } else {
        newname.name = name[0];
    }
});

</script>

<style lang="less" scoped>
.me-bottom-btn {
    width: 120px;
    height: 120px;
    text-align: center;
    box-shadow: none;
    position: relative;

    i {
        position: absolute;
        bottom: 50%;
        left: 50%;
        transform: translate(-50%, calc(-50% + 20px));
        color: #888;
        transition: all .3s;
    }

    p {
        line-height: 0;
        font-size: 12px;
        color: #888;
        position: absolute;
        bottom: 50%;
        left: 50%;
        transform: translate(-50%, calc(-50% + 15px));
    }
}
</style>