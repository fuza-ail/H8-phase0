function ubahHuruf(kata){
  var newKata =''
  var kamus = 'abcdefghijklmnopqrstuvwxyz'
  for(var i =0; i<kata.length;i++){
    for(var j=0; j<kamus.length; j++){
      if(kata[i]==='z'){
        newKata+= 'a';
        break;
      }else if(kata[i]===kamus[j]){
        newKata += kamus[j+1]
      }
    }
  }
  return newKata
}
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
