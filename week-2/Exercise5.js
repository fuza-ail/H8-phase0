// Let's Form a Sentence

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word + ' '+second+' '+third+' '+fourth+' '+fifth+' '+sixth+' '+seventh)


//Index accessing-1by1
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4]+word[5]+word[6]+word[7]+word[8]+word[9]+word[10]+word[11]+word[12]+word[13]; 
var thirdWord = word[15]+word[16] ; 
var fourthWord = word[18]+word[19] ; 
var fifthWord = word[21]+word[22]+word[23]+word[24] ; 

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);


// Breaking Sentence using Substring
var word= 'wow JavaScript is so cool';
var exampleFirstWord = word.substring(0, 3);
var secondWord = word.substring(4,14); 
var thirdWord = word.substring(15,17); 
var fourthWord = word.substring(18,20); 
var fifthWord= word.substring(21,25); 

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);


// Breaking Sentence and Count Each Length
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word.substring(0, 3);
var secondWord = word.substring(4,14); 
var thirdWord = word.substring(15,17); 
var fourthWord = word.substring(18,20); 
var fifthWord = word.substring(21,25); 

var firstWordLength = exampleFirstWord.length;
var secondWordLength = secondWord.length;
var thirdWordLength = thirdWord.length;
var fouthWordLength = fourthWord.length;
var fifthWordLength = fifthWord.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord+ ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord+ ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord+ ', with length: ' + fouthWordLength);
console.log('Fifth Word: ' + fifthWord+ ', with length: ' + fifthWordLength);