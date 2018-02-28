// "use strict";

var button = document.getElementById("season-btn");

let currentDiscount;

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
        loadCategories: function(callbackFunction){
            // create an XHR to load Carnivores
            var loader = new XMLHttpRequest();

            // Listen for when the load event is broadcast
            // and execute an anonymous callback
            loader.addEventListener("load", function(){
                // set the value of the private array
                privateCategories = JSON.parse(this.responseText).categories;

                // list the carnivores in the DOM
                callbackFunction(privateCategories);

                    
                


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

function determineSeason(categories){
    console.log("im here bitch")
    var currentSeason = document.getElementById("dropdown").value;
    // return currentSeason;
    // if (currentSeason == 1){
        console.log("winter")
        currentDiscount = categories[currentSeason].discount;
        discount = 1-currentDiscount;

return discount
}


function discounts(products){
    // var season = determineSeason();
    var currentSeason = document.getElementById("dropdown").value;
    console.log("this is the discount",discount);
    for (let i = 0; i < products.length; i++) {
        var currentProduct = products[i];
        var currentId = currentProduct.category_id
        // console.log("currentDiscount",currentDiscount);
        if(currentId == 1 && currentSeason == 0){
            var x = currentProduct.price
            currentProduct.price = (x * discount);
            console.log("HUUUUUGEE", currentProduct.price);
           currentProduct.price = Math.round(currentProduct.price * 100) / 100;
        }else if(currentId == 2 && currentSeason == 1){
            var x = currentProduct.price
            currentProduct.price = (x * discount);
            console.log("HUUUUUGEE", currentProduct.price);
           currentProduct.price = Math.round(currentProduct.price * 100) / 100;
        }else if(currentId == 3 && currentSeason ==2){
            var x = currentProduct.price
            currentProduct.price = (x * discount);
            console.log("HUUUUUGEE", currentProduct.price);
           currentProduct.price = Math.round(currentProduct.price * 100) / 100
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

function checkCategories(categories){


}

function runAll(){
    salesCategories.loadCategories(determineSeason);
    salesProducts.loadProducts(discounts);
};
// var runAll = salesProducts.loadProducts(discounts);
// salesProducts.loadProducts(winterDiscounts);

salesProducts.loadProducts(listProducts);
// salesProducts.loadProducts(gridProducts);
salesCategories.loadCategories(determineSeason);
// .then(function(value))
// salesProducts.loadProducts(sortProducts);

button.addEventListener("click",runAll);




