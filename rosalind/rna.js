const dna = 'CGTGAGTCGTGTGGCAACTGCATCCTTATTCAACTTGAAGATACGTCGGAGACGTGACCATCCATCTATCGGATCTGTGCCCGGGTCCACCTGGAGCCTCTCAGGCGGGGGATGATACGAGACATGCTGGTAACCCAGGTTAGCGCAACAAAGGGAGTCAAAGTAAAAATTAAAATTGTCGAAGATGCCAAAGGTGCAAGCACCTCGATCACTAAGCTGGAAGTAACTTTGTTAGCGGGTTCCAACTGCTAATTACCGGGTAGACTTTTTAGGTTTTCCGTGGGACGGATTCATTTTAGTGTTTCTGGAGACGTATTCCGGTACAGAATTATTAAGCTCATTCCCCTGTCAGCTTAATGTCATAATCTACGGGTTCAGTGAACTGACGAGATTACGCTTAAGGGGGCTAGTGCCGTAACTTCCTGCCAAAAAAATGCCACACTAAATGGGTGGATATCCAGAGTGGGTCGTTGGTTAGTGATCCCAATAGTACTTGCAGTAGGAAGATTGATGAATTTTGGAAGTGGCCTTGAAGGTTTAAGGTAGAGCCGACCCCGATGCCCTAACCTTGGATGTTAGGGGGCCGCCAATTGAATACCGGCCTTATTGCAACCTGACCGGTCAAAAACAGAATAGGACTTACTCCTGGGTCATTCCAGCTAACGGTGCCACTTTGCACAGTTCCACTAGTCGCAAGGAGGCACGGGACTGACAGAGGAATACAAGCTGATTGACAAGAAAGAAGTCCCAATCATTTATTGATTAGGCGCCCTGCGTAATTACCCGTGCTGTGACGTCAATTCGCGGATCTGAAGTATTCGCCTGAAACGCCAACCCCAAAATGATGGAACAAGGACCTATAGAAAACGTACTTTCGTGCTCCTTGCTCATTGTCGTCGGGAGAACGATGACTCGATCGAATAAACTG'
let rna = ''
for (let i = 0; i<dna.length; i++) {
  if (dna[i] === 'T') {
    rna += 'U'
  } else {
    rna += dna[i]
  }
}
console.log(rna)