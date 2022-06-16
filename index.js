/*
for (let age = 30; age < 40; age ++) {
    console.log(`I am ${age} years old. Happy birthday to me!`);
    //debugger;
}

const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
    debugger;
    }

    return gifts
}

wrapGifts(gifts)
*/

function writeCards(array, event) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray[i] = `Thank you, ${array[i]}, for the wonderful ${event} gift!`
    }

    return newArray
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i)
    }
}
