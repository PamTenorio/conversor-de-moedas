

const button = document.querySelector(".convert-Button")
const selectOption = document.querySelector(".option-select")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".inputCurrency").value
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert") //valor em real
    const currencyvalueconverted = document.querySelector(".currency-value-converted") //valor convertido


    console.log(selectOption.value)
    const realToday = 1.0
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 2.2
    const bitcoinToday = 2.0


    if (selectOption.value == "dolar") { //se o select identificar que o valor dele é em dolar ele vai entrar aqui
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }
    if (selectOption.value == "euro") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }
    if (selectOption.value == "libra") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / libraToday)

    }
    if (selectOption.value == "bitcoin") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / bitcoinToday)

    }

    currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {

        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (selectOption.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImg.src = "./assets/dolar.png"
    }

    if (selectOption.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }
    if (selectOption.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra1.png"
    }

    if (selectOption.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    convertValues()
}








selectOption.addEventListener("change", changeCurrency)
button.addEventListener("click", convertValues)

