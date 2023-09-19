let initial = 2000;
let rate = 10;
let years = 3;
getValue = (init = 0, rate = 5, time = 0) => init + init * (rate / 100) * time;
console.log(getValue(initial, rate, years));
