const nextArrayItem = (value, arrLength) => {
  if(value >= arrLength - 1) { //If at the end of the array, set index to 0
    return 0;
  }
  else {
    return value + 1;
  }
}

export default nextArrayItem;