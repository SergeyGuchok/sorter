class Sorter {
  constructor() {
    this.array = [];
    this.compatator = (a,b) => a-b;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {    
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
  indices.sort();
  if(indices.length == 1) return this.array;
  let arr = [];
  for(let i = 0; i<indices.length; i++){
    arr.push(this.array[indices[i]]);
  }
  arr.sort(this.compatator);
  for(let i = 0; i<indices.length; i++){
    this.array[indices[i]] = arr[i];
  }
}

  setComparator(compareFunction) {
    this.compatator = compareFunction;
  }
}

module.exports = Sorter;