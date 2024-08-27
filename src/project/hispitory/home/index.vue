<template>
  <div>
    医疗
    <div class="!bg-red-400 text-blue-500">
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
  </div>
</template>

<script setup lang="ts">
import { AddIcon, CloudUploadIcon, CloudDownloadIcon, DiscountIcon } from 'tdesign-icons-vue-next';
</script>

<style scoped lang="less"></style>
