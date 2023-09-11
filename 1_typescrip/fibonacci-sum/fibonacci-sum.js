let array = [0, 1];
let sumFibonacci = 1;
let fibonacci = (number) => {
    if (number <= 1) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
};
for (let i = 1; i <= 8; i++) {
    array.push(fibonacci(i));
    sumFibonacci += fibonacci(i);
}
console.log(array.toString());
console.log("Tổng dãy số fibonacci:" + sumFibonacci);
