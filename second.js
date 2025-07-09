//Creare un ciclo che parta da 1 e arrivi a 100 compresi
//controllare se il numero è divisibile per 3 -> stampare fizz
//controllare se il numero è divisibile per 5 -> stampare buzz
//controllare se il numero è divisibile per 3 e per 5 -> stampare fizzbuzz

for (let i = 1; i < 101; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    }
}
