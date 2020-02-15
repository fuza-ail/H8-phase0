// Melakukan Looping menggunakan While
var count = 2;
var text = ' - I love coding'
while (count<=20){
  console.log(`${count}${text}`);
  count ++
}
var count2 = 20;
var text2 = ' - I will become fullstack developer';
while(count2>=2){
  console.log(count2+text2)
  count2 --;
}

// Melakukan Looping menggunakan For
var text= ' - I love coding';
for(let i=2;i<=20;i++){
  console.log(i+text)
}

var text2 = ' - I will become fullstack developer';
for(let i=20;i>=2;i--){
  console.log(i+text2)
}

for(let i = 1; i<=100;i++){
  if(i%2 === 0){
    console.log('GENAP');
  }else{
    console.log('GANJIL')
  }
}

// Angka Ganjil dan Genap
for(let i = 1; i <=100; i+=2){
  if(i%3 === 0){
    console.log(i+' kelipatan 3')
  }
}

for(let i = 1; i <=100; i+=5){
  if(i%6 === 0){
    console.log(i + ' kelipatan 6')
  }
}

for(let i = 1; i <=100; i+=9){
  if(i%10 === 0){
    console.log(i + ' kelipatan 10')
  }
}
