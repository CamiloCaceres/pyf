<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const router = useRouter()

function play() {
  router.push('/play')
}
</script>

<template>
  <div>
    <div text-4xl>
      <p>Punto y Fama</p>
    </div>

    <div py-4 />

    <div>
      <button class="p-3 text-3xl btn" @click="play">
        Start game
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
