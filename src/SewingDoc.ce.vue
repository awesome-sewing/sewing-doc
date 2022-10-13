<script setup lang="ts">
import { watch, ref } from 'vue';

const props = defineProps<{
  id: string;
  prefix?: string;
}>();

const content = ref('');

const cdnPath = props.prefix || 'https://7365-sewing-server-7gzbk8qb24381a2f-1258716334.tcb.qcloud.la/doc/';
// b69f67c063070157129bff0551cbbf4f
watch(
  props,
  (val, oldVal) => {
    if (val.id !== oldVal?.id || val.prefix !== oldVal?.prefix) {
      fetch(cdnPath + val.id + '.json')
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          content.value = res.content;
        });
    }
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <div class="prose mx-auto focus:outline-none min-h-screen pt-20 pb-16" v-html="content"></div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
