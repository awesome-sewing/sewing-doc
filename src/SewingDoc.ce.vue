<script setup lang="ts">
import { watch, ref } from 'vue';

const props = defineProps<{
  id: string;
  prefix?: string;
}>();

const content = ref('');

const cdnPath = props.prefix || 'https://api.sewingapp.work/v2/';

watch(
  props,
  (val, oldVal) => {
    if (val.id !== oldVal?.id || val.prefix !== oldVal?.prefix) {
      fetch(cdnPath + '?id=' + val.id)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          content.value = res.data.content;
        });
    }
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <div class="prose focus:outline-none sewing" v-html="content"></div>
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
