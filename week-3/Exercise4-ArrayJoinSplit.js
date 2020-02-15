function dataHandling2(arr){
  var name = arr[1]
  var province = arr[2];
  arr.splice(1,1,`${name} Elsharawy`)
  arr.splice(2,1,`Provinsi ${province}`)
  arr.splice(4,1,'Pria', 'SMA Internasional Metro')
  console.log(arr)
  var date = arr[3].split('/')
  var bulan = date[1]
  switch(bulan){
    case '01':
      bulan = 'Januari';
      break;
    case '02':
      bulan = 'Februari';
      break;
    case '03':
      bulan = 'Mei';
      break;
    case '04':
      bulan = 'April';
      break;
    case '05':
      bulan = 'Mei';
      break;
    case '06':
      bulan = 'Juni';
      break;
    case '07':
      bulan = 'Juli';
      break;
    case '08':
      bulan = 'Agustus';
      break;
    case '09':
      bulan = 'September';
      break;
    case '10':
      bulan = 'Oktober';
      break;
    case '11':
      bulan = 'November';
      break;
    default:
      bulan = 'Desember';
      break;
  }
  console.log(bulan)
  var newDate= []
  for (var i = date.length-1; i>=0;i--){
    newDate.push(Number(date[i]))
  }
  var tempOne;
  var tempTwo;
  for(var i =0; i<newDate.length;i++){
    for(var j =0; j<newDate.length -1;j++){
      if(newDate[j+1]>newDate[j]){
        tempOne = newDate[j]
        tempTwo = newDate[j+1]
        newDate[j]=tempTwo
        newDate[j+1]=tempOne
      }
    }
  }
  var newDate2 = []
  for(var i = 0; i<newDate.length;i++){
    if(newDate[i]<10){
      newDate[i]=`0${newDate[i]}`
      newDate2.push(newDate[i])
    }else{
      newDate2.push(newDate[i].toString())
    }
  }
  console.log(newDate2)
  console.log(date.join('-'))
  console.log(arr[1].slice(0,15))
}
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */