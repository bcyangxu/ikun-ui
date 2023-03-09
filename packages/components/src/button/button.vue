<template>
    <button class="xu-button" :class="buttonStyle"><slot/></button>
</template>
<script lang="ts" setup>
    import "./style/index.less";
    import { computed } from 'vue';
    // 自定义组件名称
    defineOptions({ name : "xu-button"});
    type ButtonProps = {
        type?: string;
    };
    const  ButtonProps = defineProps<ButtonProps>();

    const buttonStyle = computed(() => {
        return { [`xu-button--${ButtonProps.type}`]: ButtonProps.type
        };

    });
</script>