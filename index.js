class SkylabArray {
  length;
  constructor(...argumentos) {
    let index = 0;
    for (const argumento of argumentos) {
      this[index] = argumento;
      index++;
    }
    this.length = index;
  }
}

const prova = new SkylabArray("hola", false, 90);
console.log(prova, prova.length);
