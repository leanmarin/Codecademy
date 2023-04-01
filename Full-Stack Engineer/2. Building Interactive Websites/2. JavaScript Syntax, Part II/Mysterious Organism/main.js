// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// const mockDNA = mockUpStrand();
const mockDNA = [ 'G', 'A', 'A', 'T', 'G', 'A', 'C', 'T', 'C', 'G', 'G', 'A', 'A', 'C', 'C' ];
const mockDNA2 = [ 'A', 'T', 'A', 'C', 'G', 'A', 'C', 'C', 'G', 'A', 'T', 'G', 'G', 'G', 'T' ];
// console.log(mockDNA);

const pAequorFactory = (number, dnaBase) => {
  return {
    specimenNum: number,
    dna: dnaBase,

    mutate() {
      // console.log(this.dna);
      const randomdna = Math.floor(Math.random() * 15);
      // console.log(randomdna);
      const randbase = returnRandBase();
      if (this.dna[randomdna] !== randbase) {
        // console.log(this.dna[randomdna], randbase);
        this.dna[randomdna] = randbase;
      }
      return this.dna
    },

    compareDNA(pAequor) {
      // console.log(this.specimenNum, pAequor.specimenNum);
      let identicalRepBases = 0;
      for (let i = 0; i < this.dna.length; i++) {
        // console.log(this.dna[i], pAequor.dna[i]);
        if (this.dna[i] === pAequor.dna[i]) {
          identicalRepBases++;
        }
      };
      const idBasesNum = (identicalRepBases / 15) * 100;
      const idBasesPercentage = Number.parseFloat(idBasesNum).toFixed(0);
      // console.log(idBasesPercentage);
      return `specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${idBasesPercentage}% DNA in common`
    },

    willLikelySurvive() {
      const filteredBases = this.dna.filter(base => {
        return base === "C" || base === "G"
      });
      // console.log(filteredBases);
      return (filteredBases.length / 15) * 100 >= 60
    }
  }
};

const ex1 = pAequorFactory(1, mockDNA);
const ex2 = pAequorFactory(2, mockDNA2);

// console.log(ex1);
// console.log(ex1.compareDNA(ex2));

// console.log(ex1.willLikelySurvive());

const createInstances = (minInstances) => {
  let result = [];
  let n = 1;
  let i = 1;
  while (n <= minInstances && i <= minInstances) {
    const preResult = pAequorFactory(i, mockUpStrand());
    if (preResult.willLikelySurvive() === true) {
      // console.log(preResult.willLikelySurvive());
      result.push(preResult.dna);
      n++;
      i++;
    } 
  }
  return result;
};

const thirtyInstances = createInstances(30);
console.log(thirtyInstances)