function meleeRangedGrouping (str) {
  //your code here
  let strSplit= str.split(',')
  let subArr =[]
  let arr=[];
  for( let i =0; i<strSplit.length; i++){
    subArr.push(strSplit[i])
    arr.push(subArr[i].split('-'))
  }
  
  return arr
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []