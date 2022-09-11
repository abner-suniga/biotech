const fs = require('fs')

fs.readFile('./data/hamm.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  lines = data.split('\n')
  hCount =  0
  for (let i=0; i<lines[0].length; i++) {
    if (lines[0][i] !== lines[1][i]) {
      hCount++
    }
  }
  console.log(hCount)
})
