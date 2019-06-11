let productsInput = document.getElementById("products_number");
let ordersInput = document.getElementById("orders_number");
let productsPrice = document.querySelector(".calculator_prices").firstElementChild;
let ordersPrice = document.querySelector(".calculator_prices").children[1];

let productsSum = 0;
let ordersSum = 0;
let accountantSum = 35;
let creditCardSum = 5;
let selectSum = 0;

let updateSum = function () {
    sum = (+productsSum) + (+ordersSum) + (+selectSum) + (+(accountantSum * accountantIsChecked)) + (+(creditCardSum * creditCardIsChecked));
    document.querySelector("#total_sum").innerText = "$" + sum;
};

productsInput.addEventListener("input", function () {
    productsInput.style.color = "black";
    productsPrice.children[1].innerText = (+productsInput.value).toFixed() + " * $0.5";
    productsPrice.children[2].innerText = "$ " + (productsInput.value * 0.5).toFixed(2);
    productsPrice.classList.remove("hidden");
    productsSum = (productsInput.value * 0.5).toFixed(2);
    if (productsInput.value.length === 0) {
        productsPrice.classList.add("hidden");
    }
    updateSum();
});

ordersInput.addEventListener("input", function () {
    ordersInput.style.color = "black";

    ordersPrice.children[1].innerText = (+ordersInput.value).toFixed(2) + " * $0.25";
    ordersPrice.children[2].innerText = "$ " + (ordersInput.value * 0.25).toFixed(2);
    ordersPrice.classList.remove("hidden");
    ordersSum = (ordersInput.value * 0.25).toFixed(2);
    if (ordersInput.value.length === 0) {
        ordersPrice.classList.add("hidden");
    }
    updateSum();
});

let select = document.querySelector(".calculator_list");
let optionsList = document.querySelector(".calculator_list_in");
let placeholder = document.getElementById("placeholder");


select.addEventListener("click", function () {
    if (placeholder.style.backgroundImage == 'url("./images/ArrowUp.svg")') {
        placeholder.style.backgroundImage = 'url("./images/ArrowDown.svg")';
    } else {
        placeholder.style.backgroundImage = 'url("./images/ArrowUp.svg")';
    }

    optionsList.classList.toggle("hidden");
});


let basicOption = document.querySelector(".calculator_list_in").firstElementChild;
let proOption = document.querySelector(".calculator_list_in").children[1];
let premiumOption = document.querySelector(".calculator_list_in").children[2];
let optionPrice = document.querySelector(".calculator_prices").children[2];

basicOption.addEventListener("click", function () {
    placeholder.innerText = "Podstawowy";
    placeholder.style.color = "#000000";
    optionPrice.children[1].innerText = "Podstawowy";
    optionPrice.children[2].innerText = "$0";
    optionPrice.classList.toggle("hidden");
    selectSum = 0;
    updateSum();
});
proOption.addEventListener("click", function () {
    placeholder.innerText = "Profesjonalny";
    placeholder.style.color = "#000000";
    optionPrice.children[1].innerText = "Profesjonalny";
    optionPrice.children[2].innerText = "$25";
    optionPrice.classList.toggle("hidden");
    selectSum = 25;
    updateSum();
});
premiumOption.addEventListener("click", function () {
    placeholder.innerText = "Premium";
    placeholder.style.color = "#000000";
    optionPrice.children[1].innerText = "Premium";
    optionPrice.children[2].innerText = "$60";
    optionPrice.classList.toggle("hidden");
    selectSum = 60;
    updateSum();
});


let accountantCheck = document.querySelector(".calculator_form label:first-of-type").firstElementChild;
let creditCardCheck = document.querySelector(".calculator_form label:last-of-type").firstElementChild;
let accountantPrice = document.querySelector(".calculator_prices").children[3];
let creditCardPrice = document.querySelector(".calculator_prices").children[4];
let accountantIsChecked = false;
let creditCardIsChecked = false;

accountantCheck.addEventListener("click", function () {
    accountantPrice.classList.toggle("hidden");
    if (accountantIsChecked === false) {
        accountantIsChecked = true;
    } else {
        accountantIsChecked = false;
    }
    updateSum();
});

creditCardCheck.addEventListener("click", function () {
    creditCardPrice.classList.toggle("hidden");
    if (creditCardIsChecked == false) {
        creditCardIsChecked = true;
    } else {
        creditCardIsChecked = false;
    }
    updateSum();
});
