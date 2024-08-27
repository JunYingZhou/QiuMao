<template>
  <Avatar v-if="app === 'avatar'" />
  <Hispitory v-else-if="app === 'hispitory'" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Avatar from '@/app/avatar/index.vue';
import Hispitory from '@/app/hispitory/index.vue';

const app = ref(import.meta.env.VITE_PROJECT); // 决定渲染的根组件
</script>
