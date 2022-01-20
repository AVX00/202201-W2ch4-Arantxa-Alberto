class SkylabArray {
  length;
  data = {};
  constructor(...argumentos) {
    let index = 0;
    for (const argumento of argumentos) {
      this.data[index] = argumento;
      index++;
    }
    this.length = index;
  }

  some(condition) {
    let result = false;
    for (const i in this.data) {
      if (condition(this.data[i]) === true) {
        result = true;
      }
    }
    return result;
  }
}

const testArray = new SkylabArray(9, 25);

console.log(testArray);

const even = (element) => element % 2 === 0;

console.log(testArray.some(even));
