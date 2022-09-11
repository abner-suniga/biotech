const fs = require('fs')

const segments = []
let segment_idx = -1

fs.readFile('./data/gc.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  data.split('\n').forEach((line) => {
    if (line.startsWith('>')) {
      segments.push({ id: line.slice(1), dna: '' })
      segment_idx++
    } else {
      segments[segment_idx].dna += line
    }
  })

  segments.map(segment => ({
    ...segment,
    gc: calcGC(segment.dna)
  }))

  let max = -Infinity
  let maxIdx = 0 
  for (let i=0; i<segments.length; i++) {
    const gc = calcGC(segments[i].dna)
    if (gc > max) {
      maxIdx = i
      max = gc
    }
  }

  console.log(segments[maxIdx].id)
  console.log(max)
})

function calcGC (dna) {
  let count = 0;
  for (let i=0; i<dna.length; i++) {
    if (dna[i] === 'G' || dna[i] === 'C') {
      count++
    }
  }
  return count / dna.length * 100
}
