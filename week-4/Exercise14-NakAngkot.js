function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var arr =[];
  var objek ={}
  if(arrPenumpang.length===0){
    return []
  }else{
    for(var i=0; i<arrPenumpang.length;i++){
      objek.penumpang = arrPenumpang[i][0];
      objek.naikDari = arrPenumpang[i][1];
      objek.tujuan = arrPenumpang[i][2];
      var dari=0;
      var menuju = 0;
      for(let j =0; j<rute.length;j++){
        if(arrPenumpang[i][1]=== rute[j]){
          break
        }else{
          dari++
        }
      }
      for(let j =0; j<rute.length;j++){
        if(arrPenumpang[i][2]=== rute[j]){
          break
        }else{
          menuju++
        }
      }
      objek.bayar = (Math.abs(menuju-dari))*2000
      arr.push(Object.assign({},objek))
      // objek.bayar= (rute.indexOf(arrPenumpang[i][2])-rute.indexOf(arrPenumpang[i][1]))*2000;
      // temp = JSON.stringify(objek)
      // arr.push(JSON.parse(temp))
    }
    return arr
  }
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]