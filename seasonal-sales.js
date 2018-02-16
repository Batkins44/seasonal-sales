"use strict";

var button = document.getElementById("season-btn");
var salesProducts = (function() {
    var privateProducts = [];

    return{
        loadProducts: function(callbackFunction){
            // create an XHR to load Carnivores
            var loader = new XMLHttpRequest();

            // Listen for when the load event is broadcast
            // and execute an anonymous callback
            loader.addEventListener("load", function(){
                // set the value of the private array
                privateProducts = JSON.parse(this.responseText).products;
                console.log("private Products", privateProducts);
                // list the carnivores in the DOM
            callbackFunction(privateProducts);

                    
                


            });
            loader.open("GET", "products.json");
            loader.send();


        }
    }
})();

var salesCategories = (function() {
    var privateCategories = [];

    return{
        loadCategories: function(){
            // create an XHR to load Carnivores
            var loader = new XMLHttpRequest();

            // Listen for when the load event is broadcast
            // and execute an anonymous callback
            loader.addEventListener("load", function(){
                // set the value of the private array
                privateCategories = JSON.parse(this.responseText).categories;
                console.log("private Categories", privateCategories);
                // list the carnivores in the DOM


                    
                


            });
            loader.open("GET", "categories.json");
            loader.send();


        }
    }
})();

function listProducts(products){
    var list = document.getElementById("products-list")
    var outputString = "";

    for (let i = 0; i < products.length; i++) {
        var currentProduct = products[i];

        // Build up DOM string

        outputString += `<h1>${currentProduct.name}</h1>`
        outputString += `<h3>${currentProduct.price}</h3>`

        list.innerHTML = outputString;
}};

function gridProducts(products){
    var list = document.getElementById("products-grid")
    var outputString = "";

    for (let i = 0; i < products.length; i++) {
        var currentProduct = products[i];

        // Build up DOM string

        outputString += `<div class="products-card">${currentProduct.name}`
        outputString += `${currentProduct.price}</div>`

        list.innerHTML = outputString;
}};

function determineSeason(){
    console.log("im here bitch")
    var currentSeason = document.getElementById("dropdown").value;
    return currentSeason;
    if (currentSeason == 1){
        console.log("winter")
    };
    if(currentSeason == 2){
        console.log("autumn")
    };
    if(currentSeason ==3){
        console.log("spring")

    }

}


function discounts(products){
    var season = determineSeason();
    console.log("this is the season",season);
    for (let i = 0; i < products.length; i++) {
        var currentProduct = products[i];
        var currentId = currentProduct.category_id
        console.log("please fucking work",currentId)
        if(currentId == 1){
            var x = currentProduct.price
            currentProduct.price = (.9*x)
            console.log("HUUUUUGEE", currentProduct.price);

        }
        var list = document.getElementById("products-list")
        var outputString = "";
    
        for (let i = 0; i < products.length; i++) {
            var currentProduct = products[i];
    
            // Build up DOM string
    
            outputString += `<h1>${currentProduct.name}</h1>`
            outputString += `<h3>${currentProduct.price}</h3>`
    
            list.innerHTML = outputString;
    }
}}

function runAll(){
    salesProducts.loadProducts(discounts)
};
// var runAll = salesProducts.loadProducts(discounts);
// salesProducts.loadProducts(winterDiscounts);

salesProducts.loadProducts(listProducts);
salesProducts.loadProducts(gridProducts);
salesCategories.loadCategories();
// salesProducts.loadProducts(sortProducts);

button.addEventListener("click",runAll);




// let api_calls = {};
// let sales = [];
// let salesArea = document.getElementById("salespot");

// api_calls.getAllSales = () =>{
//     console.log("Retrieving Sales");

//     let salesXHR = new XMLHttpRequest();

//     salesXHR.addEventListener("load",function(){
//         let data = JSON.parse(this.responseText);
//         console.log("data in call", data);
//         sales = data.results;
//         showSales(sales);
//         populatePage(sales);
//         sales.map(populatePage);
//     });
    
//     salesXHR.addEventListener("error", function(){
//         console.log("You got a problem");
//     });
    
//     salesXHR.open("GET", "products.json");
//     salesXHR.send();
// };

// api_calls.getSales = () => {
//     return sales;
// };

// function populatePage(item, index){
//     let newDiv = document.createElement("div");
//     newDiv.innerHTML = itemGrid(item, index);
//     document.getElementById("salespot").append(newDiv);
// }

// function showSales(val) {
//     let output = `<li>${val}</li>`;
//     return output;
//  }

// function itemGrid(item, index) {
//    console.log("itemGrid");
//    let salesArray = item.sales;
//    let salesList;

//    filmArray.forEach((item) => {
//       salesList = (salesList) ? salesList + showSalesList(item) : showFilmList(item);
//    });

//    let output =
//    `<section id="id--${id}" style="border:2px solid>
//    <h3>Name: ${item.name}</h3>
//    <h4>Price: ${item.price}</h4>
//    <h6>Category ID: ${item.category_id}</h6>
//    </section>`
//    return output;
   
// }

// function showSalesList(val) {
//     let output = `<li><a href="${val}">${val}</a></li>`;
//     return output;
//  }

// let button = document.getElementById("show-sales");
// button.addEventListener("click", api_calls.getAllSales);


 

 