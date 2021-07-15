var summation = function (num) {
    for (var i = 1; i < num; i++) {
        //console.log(num + i);
        var total = i + num;
        i++;
        //console.log("hello");
      }
    return total;
  }


console.log(summation(2)) // = 3 (1 + 2)
console.log(summation(8)) // = 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)