//Business Logic

function Pizza(size, ingredients) {
  this.size = size;
  this.ingredients = ingredients;
}

Pizza.prototype.addPrice = function(pizza) {
  this.pizza = pizza;
  console.log(pizza);
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