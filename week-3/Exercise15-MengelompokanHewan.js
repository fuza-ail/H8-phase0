function groupAnimals(animals){
  var mainArr = [];
  var tempOne;
  var tempTwo;
  for(var i = 0; i<animals.length; i++){
    for(var j=0;j<animals.length-1;j++){
      if(animals[j+1][0]<animals[j][0]){
        tempOne= animals[j];
        tempTwo= animals[j+1];
        animals[j] = tempTwo;
        animals[j+1]=tempOne;
      }
    }
  }
  var counter=0;
  for(var i =0; i <animals.length-1;i++){
    if(animals[i][0]===animals[i+1][0]){
      counter++;
    }else{
      mainArr.push(animals.slice(i-counter,i+1))
      counter= 0;
    }
    if(i === animals.length-2){
      if(animals[i][0]===animals[i+1][0]){
        mainArr.push(animals.slice(i-counter+1,i+2))
      }else{
        mainArr.push(animals.slice(i+1,i+2))
      }
    }
  }
  return mainArr
}


console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]