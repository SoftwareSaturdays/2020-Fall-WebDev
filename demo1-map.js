const numbers = [1, 2, 3, 4, 5];

const mapOutput1 = numbers.map((element) => element * 2);
const mapOutput2 = numbers.map((element) => {
    if(element % 2 == 1) {
        return element;
    } else {
        return 0;
    }
});

console.log(numbers);
console.log(mapOutput1);
console.log(mapOutput2);