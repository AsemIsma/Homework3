function check (mainDish, sideDish, dessert, drink, saladOrSnack, chaevue) {

  let bill = mainDish + sideDish + dessert + drink + saladOrSnack;
  
  let total =  (bill * chaevue) + bill;
  let totalBill = total.toFixed(2);
  
  console.log('Ваш общий счет c чаевыми составляет $' + totalBill);
  }
  
  check(15, 10, 6, 4, 5, 0.15);
  check(115, 110, 16, 14, 15, 0.20);
  check(1005, 910, 67, 41, 55, 0.25);