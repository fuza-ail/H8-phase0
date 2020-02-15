// Menyusun Barisan Bintang
var row1 = 5;
for (let i = 0; i<row1; i++){
  console.log('*')
}

// Menyusun Barisan Bintang dengan Nested Looping
var row2 = 5;
for(let i = 0;i<row2;i++){
  let star = ''
  for(let j = 0; j<row2;j++){
    star = star+ '*'
  }
  console.log(star)
}

// Menyusun Barisan Tangga Bintang dengan Nested Looping
var row3 = 6;

for(let i = 0; i<row3; i++){
  let star = '';
  for(let j = 0; j<=i; j++){
    star = star + '*'
  }
  console.log(star)
}