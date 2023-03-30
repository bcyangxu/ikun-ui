<template>
    <button class="xu-link" :class="linkStyle"><slot/></button>
    <a class="xi-link" :class="linkStyle">
        <span></span>
    </a>
</template>
<script lang="ts" setup>
    import "./style/index.less";
    import { computed } from 'vue';
    // 自定义组件名称
    defineOptions({ name : "xu-link"});
    type LinkProps = {
        type?: string;
    };
    const  LinkProps = defineProps<LinkProps>();

    const linkStyle = computed(() => {
        return { [`xu-link--${LinkProps.type}`]: LinkProps.type
        };

    });
</script>