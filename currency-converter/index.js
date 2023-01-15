const idr = 1_000_000;

const dataCurrency = [
  {
    name: "$NTD",
    divisor: 506,
  },
  {
    name: "$USD",
    divisor: 15114,
  },
  {
    name: "¥JPY",
    divisor: 118,
  },
  {
    name: "¥CNY",
    divisor: 2254,
  },
  {
    name: "€Euro",
    divisor: 16389,
  },
  {
    name: "£Pound sterling",
    divisor: 18486,
  },
];

for (let index = 0; index < dataCurrency.length; index = index + 1) {
  const currency = dataCurrency[index];
  const newCurrency = {
    name: `${currency.name}`,
    converted: idr / currency.divisor,
  };
  console.log(
    `IDR ${idr} is equal to ${newCurrency.name} ${newCurrency.converted}`
  );
}
