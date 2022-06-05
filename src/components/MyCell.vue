<template>
    <div v-ripple="{ color: 'var(--picker-cancel-button-text-color)' }" class="my-cell__box">
        <div class="my-cell__box-warrper">
            <div class="my-cell__icon">
                <slot name="icon"></slot>
            </div>
            <div class="my-cell__content">
                {{ content }}
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps({
    content: String
});

</script>

<style lang="less">
.my-cell__box {
    min-height: 55px;
    line-height: 55px;
}

.my-cell__box-warrper {
    padding: 0px 20px;
    display: flex;
    align-items: center;

    .my-cell__icon {
        width: 35px;
        height: 35px;
        border-radius: 5px;
        overflow: hidden;

        img {
            width: inherit;
            height: inherit;
            object-fit: cover;
        }
    }

    .my-cell_svgIcon {
        width: inherit;
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            color: #fff;
        }
    }

    .my-cell_svgIcon.bg-green {
        background: var(--pull-refresh-success-color);
    }

    .my-cell_svgIcon.bg-yellow {
        background: var(--color-warning);
    }

    .my-cell_svgIcon.bg-purple {
        background: #B413EC;
    }

    .my-cell__content {
        margin-left: 15px;
        color: #000;
    }
}
</style>