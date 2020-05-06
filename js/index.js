/*1.1 Create a variable `hacker1` with the driver's name.

1.2 Print `"The driver's name is XXXX"`.

1.3 Create a variable `hacker2` with the navigator's name.

1.4 Print `"The navigator's name is YYYY"`
*/


let hacker1 = 'Zim';
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Kevin';
console.log(`The navigator's name is ${hacker2}`)

/*Conditionals
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

if (hacker1.length > hacker2.length) { 
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)  
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
 
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};


//Loops


/*
3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
*/

let chars = '';
for (let character of hacker1){
chars += character +' ';
}
console.log(chars)


/*
3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
*/

let backNav = '';
for (let i = hacker2.length-1; i >= 0; i--){
  backNav += hacker2[i];
}
console.log(backNav);

/*
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

var hacker1Char = '';
var hacker2Char = '';
for (i = 0; i < hacker1.length; i++) {
  hacker1Char += hacker1.charCodeAt(i);
};
for (j = 0; j < hacker2.length; j++) {
  hacker2Char += hacker2.charCodeAt(j);
};

if (hacker1Char[0] < hacker2Char[0]) {
  console.log('The driver\'s name goes first')
} else {
  console.log('Yo, the navigator goes first definitely.')
}


// Bonus 1:

let paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a commodo neque, a suscipit urna. Vestibulum pulvinar sem in velit facilisis mollis. Donec egestas est urna, eu laoreet magna lacinia at. Maecenas ultrices rutrum felis, sed commodo ligula commodo ut. Integer vitae lacinia est. In hac habitasse platea dictumst. Donec sagittis blandit quam ut facilisis. Praesent molestie metus ante, nec luctus sapien semper eu. Aenean eu accumsan sapien. Nam accumsan ligula et malesuada varius. Quisque hendrerit leo diam, id bibendum nibh aliquam vel. Proin porttitor sapien nec neque ultrices tristique. Maecenas luctus feugiat venenatis. Vivamus pellentesque hendrerit felis at mollis. In semper blandit ullamcorper. Etiam a porttitor sapien. Suspendisse sed lectus eu mi tristique vehicula. Phasellus a orci eu lacus blandit efficitur in eget sem. Morbi et nisl a purus ullamcorper sodales vitae a mauris. In sagittis, ante sed pretium auctor, lectus ex ornare ligula, eget sodales risus sapien eleifend orci. Phasellus a magna vestibulum, dignissim lorem et, interdum elit. Ut consequat leo vitae vestibulum ornare. Nam finibus et odio sit amet facilisis. Mauris porttitor vel magna nec commodo. Quisque auctor tellus non ipsum tincidunt, et condimentum velit posuere. Ut lacus velit, malesuada vel erat ut, sagittis aliquam tortor. Morbi ut mi augue. Integer accumsan, ante nec luctus luctus, elit risus congue magna, at rhoncus lacus eros sed augue. Proin sed dictum dolor. Suspendisse ut rhoncus ante. Duis ac urna non neque gravida pellentesque commodo vestibulum eros. Suspendisse id lectus orci. Sed nisi urna, commodo vitae tempus a, interdum a elit. Nam neque dolor, condimentum id varius in, commodo nec nisi. Aenean at lorem tellus.'

//Make your program count the number of words in the string.
console.log(paragraph.split(' ').length)


//Make your program count the number of times the Latin word et appears.
var paragraphWords = paragraph.split(' ')
var etCount = 0;
for(i=0; i< paragraphWords.length; i++)
if(paragraphWords[i] === 'et'){
  etCount++
}
console.log(etCount)


//Bonus 2:

var phraseToCheck = 'taco cat';
var phraseReverse = ''


for (let i = phraseToCheck.length -1; i >= 0; i--){
  if(phraseToCheck[i] === ' '){
    continue;
  }
  phraseReverse += phraseToCheck[i];
};

console.log(phraseReverse)
let phraseNormal = phraseToCheck.split(' ').join('');


if (phraseNormal === phraseReverse){
  console.log('Palindrome!')
} else {
  console.log('Not a Palindrome!')
}