function showMultiplicationTable(num) {
    for(let i = 1; i <= 10; i++) {
        let x = 7 * i
        console.log(`${num} x ${i} = ${num}`);
    }
}
showMultiplicationTable(7)


for (let i = 1; i <= 10; i++) {
    let randomNum = Math.floor(Math.random() * (200-20) + 20);
    if(randomNum % 2 === 0) {
        console.log(`${randomNum} is even`)
    } else {
        console.log(`${randomNum} is odd`)
    }
}

for(let i = 0; i < 10; i++) {
    console.log(`${i}`.repeat(i));
}

for(let i = 100; i > 0; i -= 5){
    console.log(i);
}


//breaks



let valid = false;
let userNumber = 1;
do {
    userNumber = prompt("please enter a odd number between 1 and 49")
    if (userNumber % 2 === 0) {
        console.log('That number is not odd. Please enter a odd number')
        continue;
    }
    if (userNumber > 49 || < 0) {

    }
    if (!isNaN(userNumber)) {
        console.log('that is not a number');
        continue;
    }

}

let 