var summation = function (num) {
    let total = 0
    for(let i = 0; i <= num; i++) {
        total = total + i;
    }
    return total;
}


console.log(summation(2)) // = 3 (1 + 2)
console.log(summation(8)) // = 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)