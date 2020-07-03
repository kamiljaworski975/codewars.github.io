function iqTest(numbers) {
  let x;
  let y;
  let arr = numbers.split(" ");
  x = arr.filter((el) => el % 2 !== 0);
  y = arr.filter((el) => el % 2 === 0);
  return x.length > y.length ? arr.indexOf(y[0]) + 1 : arr.indexOf(x[0]) + 1;
}

let z = iqTest("6 6 1 6 6");
// console.log(z)
