function balikKata(kata) {
    // you can only write your code here!
    // Step 1. Use the split() method to return a new array
    var splitString = kata.split(""); // var splitString = "Super".split("");
    // ["S", "u", "p", "e", "r"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["S", "u", "p", "e", "r"].reverse();
    // ["r", "e", "p", "u", "S"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["r", "e", "p", "u", "S"].join("");
    // "repuS"

    //Step 4. Return the reversed string
    return joinArray; // "repuS"
}


// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS