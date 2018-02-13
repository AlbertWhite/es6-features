const generatorFunction = function *(){

}

const iterator = generatorFunction();

console.log(iterator[Symbol.iterator]);