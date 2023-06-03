// helpers
export function toArray(n: any) {
  const numArray = String(n)
    .split('')
    .map((n) => {
      return Number(n)
    })
  return numArray
}
export function generateRandomNumber() {
  return shuffle('0123456789'.split('')).join('').substring(0, 4)
}
function shuffle(o: any) {
  for (let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o
}
