const prevArrayItem = (value, arrLength) => {
  console.log(value + " " + arrLength);
  if(value === 0) { //If at the beginning of the array, set to last index
    return arrLength - 1;
  }
  else {
    return value - 1;
  }
}

export default prevArrayItem;
