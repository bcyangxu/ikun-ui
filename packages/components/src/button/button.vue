<template>
    <button class="ik-button" :class="buttonStyle"><slot/></button>
</template>
<script lang="ts" setup>
    import "./style/index.less";
    import { computed } from 'vue';
    // 自定义组件名称
    defineOptions({ name : "ik-button"});
    type ButtonProps = {
        type?: string;
    };
    const  ButtonProps = defineProps<ButtonProps>();

    const buttonStyle = computed(() => {
        return { [`ik-button--${ButtonProps.type}`]: ButtonProps.type
        };

    });
</script>