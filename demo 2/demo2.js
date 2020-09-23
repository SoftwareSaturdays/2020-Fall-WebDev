function noReturn() {
    console.log("This function has no return or parameters");
}

function noParams() {
    return "This function had a return value";
}

function allTogether(param1, param2) {
    return param1 + param2;
}

noReturn();

let testReturn = noParams();
console.log(testReturn);

testReturn = allTogether(1, 2);
console.log(testReturn);