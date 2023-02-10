const whatRelation = percentSharedDNA => {
  if (percentSharedDNA === 0) {
    return 'You are likely not related.';
  } else if (percentSharedDNA < 3) {
    return 'You are likely 3rd cousins';
  } else if (percentSharedDNA < 6) {
    return 'You are likely 2nd cousins.';
  } else if (percentSharedDNA < 14) {
    return 'You are likely 1st cousins.';
  } else if (percentSharedDNA < 35) {
    return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.';
  } else if (percentSharedDNA < 100) {
    return 'You are likely parent and child or full siblings.';
  } else if (percentSharedDNA === 100) {
    return 'You are likely identical twins.';
  }
}

console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'
