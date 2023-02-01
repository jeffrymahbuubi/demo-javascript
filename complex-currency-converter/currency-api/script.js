// Link Country By Currency Name
urlCurrencyCode =
  "https://country-api-jeffrymahbuubi.netlify.app/data/src/country-by-currency-code.json";

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
  const apiURL = urlCurrencyCode;
  try {
    const response = await fetch(apiURL);
    apiCountries = await response.json();
    console.log(apiCountries);
  } catch (error) {
    // Catch Error Here
  }
}

getCountriesName();
