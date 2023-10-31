<script setup lang="ts">
import '@privateLib/uikit/style';
import Foo from '@/components/Foo.vue';

const product = {
  id: 1349993,
  productId: 35323,
  name: 'Test product',
  quantity: 3,
  unitPrice: 21.6,
  unit: '5 ft cuts',
  unitMachineValue: '5',
  unitSuffixValue: 'ft',
  total: 64.8,
  imageUrl: 'https://placehold.co/600x400',
  desc: undefined,
  customerNote: '',
  tfPartNumber: '21341234',
  backordered: false,
  url: '/category/thing',
  manufacturer: 'Green Lanterns',
  assemblyType: '',
  seriesGrouping: undefined,
  createdAt: '2023-07-05T18:22:00.000Z',
  updatedAt: '2023-07-05T18:22:00.000Z',
};
</script>

<template>
  <div class="tw-relative tw-mt-4 tw-font-sans">
    <h1>This is a test</h1>
    <Foo :product="product"></Foo>
  </div>
</template>

<style src="./style.css"></style>
