function digitPerkalianMinimum(angka){
  var limit = Math.floor(Math.sqrt(angka))
  var faktor =[];
  var faktorKali ='';
  var faktorSatu;
  var faktorDua;
  for (i=0; i<= limit;i++){
    if(angka%i===0){
      faktorSatu=i;
      faktorDua= angka/i;
      faktorKali+=faktorSatu.toString()+'*'+faktorDua.toString()
      faktor.push(faktorKali)
    }
    faktorKali =''
  }
  var min = Infinity;
  for(var i=0;i<faktor.length;i++){
    if(faktor[i].length<min){
      min = faktor[i].length
    }
  }
  return min-1
}
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2