// Link Country By Currency Code
urlCurrencyName =
  "https://country-api-jeffrymahbuubi.netlify.app/data/src/country-by-currency-name.json";

// Link Convert Currency API Free
urlConvertCurency =
  "var requestURL = 'https://api.exchangerate.host/convert?from=USD&to=EUR';";

const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");

// Get Country Names From API
async function getCountriesName() {
  const proxyUrl = "https://proxy-api-jeffrymahbuubi.netlify.app/";
  const apiUrl =
    "https://country-api-jeffrymahbuubi.netlify.app/data/src/country-by-currency-code.json";
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      mode: "no-cors",
    });
    const apiCurrencies = await response.json();
    console.log(apiCurrencies);
  } catch (error) {}
}

getCountriesName();
