
//k = 3
//
//1 m,f 1
//2 M,F 1
//3 M,F m,f m,f m,f 4
//4 M,F m,f m,f m,f M,F M,F M,F 7
//5 M,F m,f m,f m,f M,F m,f m,f m,f M,F m,f m,f m,f M,F m,f m,f m,f M,F M,F M,F 19

const lookup = new Map()

function fibRabbit (n, k) {
  console.log(lookup)
  if (n < 3) {
    return 1
  }
  const value = lookup.get(`${n},${k}`)
  if (!!value) {
    return value
  }
  const newValue = fibRabbit(n-1, k) + k*fibRabbit(n-2, k)
  lookup.set(`${n},${k}`, newValue)
  return newValue
}

console.log(lookup)
console.log(fibRabbit(34,4))
