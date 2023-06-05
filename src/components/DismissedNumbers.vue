<script setup lang="ts">
const $props = defineProps({
  number: Number,
})
const crossed = ref(false)
</script>

<template>
  <p class="" :class="{ 'line-through text-gray-500 bg-gray-800/70': crossed }" @click="crossed = !crossed">
    {{ $props.number }}
  </p>
</template>
