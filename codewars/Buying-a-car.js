function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  let result = [];
  let loss = percentLossByMonth * 0.01;
  let currentMoney = startPriceOld;
  let needMoney = startPriceNew;
  let income = 0;
  let cash = 0;
  if (currentMoney >= needMoney) return [0, currentMoney - needMoney];


    for (let i = 1; i < 100; i++) {
        income += savingperMonth;
        if (i % 2 ===0) {
            loss += 0.005
        }
        currentMoney = currentMoney - (currentMoney * loss)
        needMoney = needMoney - (needMoney * loss);
        cash = income + currentMoney;
        if (cash >= needMoney) {
            let x = Math.round(cash - needMoney);
            result = [i, x]
            break;
        }
    }
    return result
}

let x = nbMonths(2300 ,4600 ,1000 ,1.4);
// console.log(x)