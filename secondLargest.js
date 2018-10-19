const findSecondHighest = (list) => {
  let secondHighest = Number.MIN_VALUE;
  let highest = Number.MIN_VALUE;
  for (let i = 0; i < list.length; i++) {
    if (list[i] > highest) {
      secondHighest = highest;
      highest = list[i];
    } else if (list[i] === highest) {
      highest = list[i];
    } else if(list[i] < highest && list[i] > secondHighest) {
      secondHighest = list[i];
    }
  }
  return secondHighest;
};

a = [10,2,5,7,6,9,10,8,10]

console.log(findSecondHighest(a))