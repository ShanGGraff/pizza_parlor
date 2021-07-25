//Business Logic

function Pizza(size, ingredients) {
  this.size = size;
  this.ingredients = ingredients;
  this.price = 0;
}

Pizza.prototype.addPrice = function(price) {
  this.price = price;
  console.log(price);
};


//UserInterface Logic


$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();


    $("#pizzaSize").hide();
    const pizzaSize = $("#pizzaSize").val();
    console.log(pizzaSize);





    $("#pizzaSize").show();
  });
});