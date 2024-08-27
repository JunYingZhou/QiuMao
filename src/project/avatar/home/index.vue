<template>
  <div class="bg-red-400 text-blue-500">
    <t-space size="24px">
      <t-button theme="primary">
        <template #icon><AddIcon /></template>
        新建
      </t-button>
      <t-button variant="outline">
        <template #icon><CloudUploadIcon /></template>
        上传文件
      </t-button>
      <t-button
        shape="circle"
        theme="primary">
        <template #icon><DiscountIcon /></template>
      </t-button>
      <t-button
        shape="circle"
        theme="primary">
        <template #icon> <CloudDownloadIcon /></template>
      </t-button>
    </t-space>
  </div>
</template>

<script setup lang="ts">
import { test } from '@/apis';
import { onMounted } from 'vue';
import { AddIcon, CloudUploadIcon, CloudDownloadIcon, DiscountIcon } from 'tdesign-icons-vue-next';

onMounted(() => {
  testApi();
});

const testApi = async () => {
  const res = await test({ id: '123' });
  console.log('qmres', res);
};
</script>

<style scoped lang="less"></style>
