function addition(a, b) {
    return a + b;
}
function subtraction(a, b) {
    return a - b;
}
function multiplication(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}

console.log("-- first export empty --", module);

// module.exports.addition = addition;
// module.exports.subtraction = subtraction;

module.exports = {
    addition: addition,
    subtraction: subtraction,
    multiplication: multiplication,
    division: division,
};

console.log("-- secede export full --", module);
