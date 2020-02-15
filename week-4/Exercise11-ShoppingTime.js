function shoppingTime(memberId,money){
  var data ={};
  var change;
  const stacattu = 1500000;
  const zoro = 500000;
  const hnn = 250000;
  const uniklooh = 175000;
  const casing = 50000;
  if(memberId === undefined|| memberId === ''){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }else{
    if(money<casing){
      return 'Mohon maaf, uang tidak cukup'
    }else{
      data.memberId = memberId;
      data.money = money;
      data.listPurchased =[];
      if(money>stacattu){
        data.listPurchased.push('Sepatu Stacattu');
        change = money-stacattu;
      }else{
        change = money;
      }
      if(change>=zoro){
        data.listPurchased.push('Baju Zoro');
        change = change-zoro;
      }
      if(change>=hnn){
        data.listPurchased.push('baju H&N');
        change = change-hnn;
      }
      if(change>=uniklooh){
        data.listPurchased.push('Sweater Uniklooh');
        change = change-uniklooh;
      }
      if(change>=casing){
        data.listPurchased.push('Casing Handphone');
        change = change-casing;
      }
      data.changeMoney = change;
      return data
    }
  }
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja