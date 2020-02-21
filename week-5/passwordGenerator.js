function changeVocals (str) {
  //code di sini
  var vokal = {
    a:'b',
    i:'j',
    u:'v',
    e:'f',
    o:'p',
    A:'B',
    I:'J',
    U:'V',
    E:'F',
    O:'P'
  }
  let kata=''
  for (let i = 0; i < str.length; i++) {
    if(str[i] in vokal){
      for( let key in vokal){
        if(key == str[i]){
          kata+= vokal[key]
        }
      }
    }else{
      kata+= str[i]
    }

  }

  return kata;
}

function reverseWord (str) {
  //code di sini
  var kata=''
  for(var i = str.length-1; i>=0; i--){
    kata+= str[i]
  }
  return kata;
}

function setLowerUpperCase (str) {
  //code di sini
  var kata = ''
  for(var i=0; i<str.length;i++){
    if(str[i]===str[i].toLowerCase()){
      kata+= str[i].toUpperCase();
    }else{
      kata+= str[i].toLowerCase();
    }
  }
  return kata
}

function removeSpaces (str) {
  //code di sini
  var kamus = 'abcdefghijklmnopqrstuvwxyz';
  var kamusSatu= kamus.toUpperCase();
  var total = kamus + kamusSatu;
  var kata = ''
  for(var i =0; i<str.length;i++){
    for(var j=0; j<total.length;j++){
      if(str[i]===total[j]){
        kata+= total[j]
      }
    }
  }
  return kata
}

function passwordGenerator (name) {
  //code di sini
  var changeV = changeVocals(name);
  var reverseW = reverseWord(changeV);
  var setLU = setLowerUpperCase(reverseW);
  if(name.length<5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }else{
    return setLU
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'