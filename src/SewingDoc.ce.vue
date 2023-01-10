<!-- eslint-disable vue/no-child-content -->
<script setup lang="ts">
import { watchEffect, ref } from 'vue';

const props = defineProps<{
  id: string;
  prefix?: string;
}>();

const content = ref('');
const cdnPath = props.prefix || 'https://api.sewingapp.work/v2/';

watchEffect(() => {
  fetch(cdnPath + '?id=' + props.id)
    .then((res) => res.json())
    .then((res) => {
      content.value = res.data.content;
    })
    .catch((err) => {
      console.error('[sewing doc error]' + err);
    });
});
</script>

<template>
  <div class="prose focus:outline-none sewing" v-html="content"></div>
  <div v-if="content === ''" class="animate-pulse">
    <div class="h-5 bg-slate-200 rounded mb-3"></div>
    <div class="h-5 bg-slate-200 rounded mb-3 w-3/4"></div>
    <div class="h-5 bg-slate-200 rounded mb-3 w-1/2"></div>
    <div class="h-5 bg-slate-200 rounded mb-3 w-1/2"></div>
  </div>
</template>

<style>
.sewing {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
