// Grocery List Task 1 
let item1 = prompt("Enter the first grocery item: ");
let quan1
do{
    quan1 = prompt(`How many ${item1} would you like?`);
    if(isNaN(quan1)){
        alert(`This must be a number, please try again.`)
    }
} while(isNaN(quan1) || quan1 === "")

let item2 = prompt("Enter the second grocery item: ");
let quan2
do{
    quan2 = prompt(`How many ${item2} would you like?`);
    if(isNaN(quan2)){
        alert(`This must be a number, please try again.`)
    }
} while(isNaN(quan2) || quan2 === "")

let item3 = prompt("Enter the third grocery item: ");
let quan3
do{
    quan3 = prompt(`How many ${item3} would you like?`);
    if(isNaN(quan3)){
        alert(`This must be a number, please try again.`)
    }
} while(isNaN(quan3) || quan3 === "")

let sum = parseInt(quan1) + parseInt(quan2) + parseInt(quan3);
console.log(`Your Shopping List: 
${quan1} ${item1}
${quan2} ${item2}
${quan3} ${item3}
Total number of items: ${sum}
Have a nice shopping trip!`)

// Tongue Twister Task 2 
let tongueTwister = "How much wood would a woodchuck chuck, if the woodchuck could chuck wood?";
let pangram = "The quick brown fox jumps over the lazy dog.";
let anotherPangram = "The five boxing wizards jump quickly.";

let tongueTwisterLower = tongueTwister.toLowerCase();
console.log("Here is the tongue twister in all lower case: ");
console.log(tongueTwisterLower);

console.log("The first occurrence of 'fox' in panagram is index: ");
console.log(pangram.indexOf("fox"));
function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}
pangramFox = replaceAt(pangram, pangram.indexOf("fox"),"F");

console.log("'fox' is capitalized to 'Fox' in panagram");
console.log(pangramFox);

console.log("The 11th character in anotherPangram is: ");
console.log(anotherPangram[10]);