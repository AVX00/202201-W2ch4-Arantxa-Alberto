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

  push(...argumentos) {
    for (const valor of argumentos) {
      this.data[this.length] = valor;
      this.length++;
    }
  }

  filter(condition) {
    const newArray = new SkylabArray();
    for (const i in this.data) {
      if (condition(this.data[i])) {
        newArray.push(this.data[i]);
      }
    }
    return newArray;
  }

  find(condition) {
    for (const i in this.data) {
      if (condition(this.data[i])) {
        return this.data[i];
      }
    }
    return null;
  }

  map(modifier) {
    const newArray = new SkylabArray();
    for (const i in this.data) {
      if (Object.hasOwnProperty.call(this.data, i)) {
        const element = this.data[i];
        newArray.push(modifier(element));
      }
    }
    return newArray;
  }
}

describe("Given a SkylabArray class", () => {
  describe("When constructed with elements 56, 'hola', true", () => {
    test("Then it should contain elements 56, 'hola', true in the data property and have a lenght of 3", () => {
      const expectedValue = { length: 3, data: { 0: 56, 1: "hola", 2: true } };

      const returnedValue = new SkylabArray(56, "hola", true);

      expect(returnedValue).toEqual(expectedValue);
    });
  });
});
