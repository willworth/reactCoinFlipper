function choice(arr) {
  let randomInx = Math.floor(Math.random() * arr.length);
  return arr[randomInx];
}

export { choice };
