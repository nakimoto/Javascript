const bieberBaby = [
  'You know you love me, I know you care',
  'Just shout whenever and I will be there',
  'You are my love, you are my heart',
  'And we will never, ever, ever be apart',
  'baby, baby, baby, oh',
  'baby, baby, baby, no',
  'Like baby, baby, baby, oh',
  'Thought youd always be mine, mine'
];

function hasBaby(bieberBaby){
//pass through
  return _.some(bieberBaby, function (isItTrue){
    return isItTrue.includes('baby');
  })

  console.log(hasBaby(bieberBaby));
}
//pass through function
function numBabies(bieberBaby){
  const baby = _.filter(bieberBaby, function (nums){
    nums.includes('baby')
  });
  return baby.length;
}
console.log(numBabies(bieberBaby));
