function xo(str) {
    // you can only write your code here!
    var x = (str.split("x").length);
    var o = (str.split("o").length);
    if (x === o) {
        return true;
    } else if (x !== o) {
        return false;
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true