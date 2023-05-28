<script setup lang="ts">
import { ref } from 'vue'

const router = useRouter()

const num = ref()
const currentGuess = ref(null)
const attemptNumber = ref(0)
const guessList: any = ref([])
const win = ref(false)
// helpers
function toArray(n: any) {
  const numArray = String(n)
    .split('')
    .map((n) => {
      return Number(n)
    })
  return numArray
}
function generateRandomNumber() {
  return shuffle('0123456789'.split('')).join('').substring(0, 4)
}
function shuffle(o: any) {
  for (let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o
}

function checkGuess() {
  let out = ''
  const resultArray = []
  const playersNumber = toArray(num.value)
  const playerGuess = toArray(currentGuess.value)

  for (const [i, s] of playerGuess.entries()) {
    if (s === playersNumber[i])
      resultArray.push('F')

    else if (playersNumber.includes(s))
      resultArray.push('P')
  }

  attemptNumber.value++

  out = resultArray.join('')
  if (out === '')
    out = 'X'
  else if (out === 'FFFF')
    win.value = true

  guessList.value.push({
    attemptNumber: attemptNumber.value,
    result: out,
    guess: currentGuess.value,
  })
  currentGuess.value = (null)
}
function playAgain() {
  router.go(0)
}

onMounted(() => {
  num.value = generateRandomNumber()
})
</script>

<template>
  <div class="mx-auto max-w-md flex flex-col items-center space-y-3">
    <h1 class="mb-5 text-3xl">
      Punto y Fama
    </h1>

    <!-- Guess Input -->
    <div v-if="!win">
      <p class="pb-2 text-sm">
        Guess a 4 digit number:
      </p>
      <div class="flex items-center text-left space-x-2">
        <input v-model="currentGuess" type="text" maxlength="4" class="mx-auto w-24 border-2 rounded-xl p-3 text-center text-2xl">
        <button class="rounded-xl p-5 btn" @click="checkGuess()">
          <div i-carbon:arrow-right />
        </button>
      </div>
    </div>

    <!-- You won -->
    <div v-if="win">
      <h1 class="text-xl">
        Congratulations! You won!
      </h1>
      <h3>It took you {{ attemptNumber }} attempts to win</h3>
      <h3>Try to beat your record!</h3>
      <button class="mt-2 text-lg btn" @click="playAgain">
        Play again!
      </button>
    </div>

    <div>
      <!-- Result table -->
      <table v-if="guessList.length !== 0" class="min-w-xs table-auto text-left">
        <thead class="border-b font-medium dark:border-neutral-500">
          <tr>
            <th class="border-r" />
            <th class="b-r p-2">
              #
            </th>
            <th class="p-2">
              result
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="guess in guessList" :key="guess.attemptNumber" class="odd:bg-gray-100 dark:odd:bg-zinc-800">
            <td class="border-r p-4">
              {{ guess.attemptNumber }}
            </td>
            <td class="border-r p-2">
              {{ guess.guess }}
            </td>
            <td class="p-2">
              {{ guess.result }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
