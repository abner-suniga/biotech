const fs = require('fs')

fs.readFile('./data/perm.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const n = parseInt(data)
  let sum = n
  for (let i=n-1; i>1; i--) {
    sum *= i
  } 
  console.log(sum)

  function perm (str, arr) {
    console.log(str, arr)
    if (arr.length === 1) {
      console.log(str+arr[0])
      return
    }
    for (let i=0; i<arr.length; i++) {
      perm(str+arr[i], [...arr].splice(i, 1))
    }
  }

  perm('', [1,2,3])
  
})


