// m,f
// M,F 1
// 
// M,F 1
// M,F 2
// m,f
// 
// ---
// 
// M,F
// M,F 2
// m,f
// 
// M,F 2
// m,f
// M,F 1
// 
// 1 1 2 2 3 4 5 6
//
// fibd(3) = 1 + 1 - ?

const map = new Map()

function fibd (n, m) {
  if (n < 1) {
    return 0
  }
  if (n < 3) {
    return 1
  }
  console.log(n, m)
  console.log(map)
  let value = map.get(`${n},${m}`)
  if (!value) {
    value = fibd(n-1, m) + fibd(n-2, m) - fibd(n-m, m)
    map.set(`${n},${m}`, value)
  }
  return value
}

console.log(fibd(6,3))


