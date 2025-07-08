//Creare un ciclo che parta da 1 e arrivi a 100 compresi
//controllare se il numero è divisibile per 3 -> stampare fizz
//controllare se il numero è divisibile per 5 -> stampare buzz
//controllare se il numero è divisibile per 3 e per 5 -> stampare fizzbuzz

let msg = "";

for (let i = 1; i < 101; i++) {
    if (i % 5 != 0 && i % 3 != 0) {
        msg = i;
    } else {
        if (i % 3 == 0) {
            msg += "Fizz";
        }
        if (i % 5 == 0) {
            msg += "Buzz";
        }
    }
    console.log(`${msg}\n`);
    msg = "";
}
