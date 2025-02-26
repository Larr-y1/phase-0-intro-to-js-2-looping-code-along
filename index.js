// Code your solutions in this file
const names = ["Larry", "Paul", "Carol"];

function writeCards (names, wedding) {
    const messages = [];

    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${wedding} gift!`);
    }

    return messages;
}

function countDown(number) {
    while(number >= 0){
        console.log(number);
        number--;
    }
   
}
countDown(10);
