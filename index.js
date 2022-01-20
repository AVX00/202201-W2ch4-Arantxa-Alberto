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

  push(...argumentos) {
    for (const valor of argumentos) {
      this[this.length] = valor;
      this.length++;
    }
  }
}

const prova = new SkylabArray("hola", false, 90);
console.log(prova, prova.push(76));
