<script setup lang="ts">
const numbers = [...Array(10).keys()]
</script>

<template>
  <div class="grid grid-cols-5 gap-2">
    <div v-for="number in numbers" :key="number">
      <DismissedNumbers class="cursor-pointer rounded-lg bg-gray-700 p-2 text-center text-gray-300" :number="number" />
    </div>
  </div>
</template>
