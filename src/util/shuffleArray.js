const shuffleArray = (arr) => {
  let shuffle = arr;
  if (arr.length <= 1) return arr;

  for (let i = shuffle.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = shuffle[i];
    shuffle[i] = shuffle[j];
    shuffle[j] = temp;
  }
  return shuffle;
};

export default shuffleArray;
