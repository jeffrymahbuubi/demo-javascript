const moneyInIDR = 1_000_000;

const dataCurrencies = [
  { name: "$NTD", rate: 506 },
  { name: "$USD", rate: 15114 },
  { name: "¥JPY", rate: 118 },
  { name: "¥CNY", rate: 2254 },
  { name: "€Euro", rate: 16389 },
  { name: "£Pound sterling", rate: 18486 },
];

const dataConvertedMoneys = [];

for (let index = 0; index < dataCurrencies.length; index = index + 1) {
  const currency = dataCurrencies[index];
  const newCurrency = {
    name: `${currency.name}`,
    value: moneyInIDR / currency.rate,
  };
  dataConvertedMoneys[index] = newCurrency;
}

for (let index = 0; index < dataConvertedMoneys.length; index++) {
  const money = dataConvertedMoneys[index];
  console.log(`IDR ${moneyInIDR} is equal to ${money.name} ${money.value}`);
}
