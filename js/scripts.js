//Business Logic

function Pizza(size, ingredients) {
  this.size = size;
  this.ingredients = ingredients;
  this.price = 0;
}

Pizza.prototype.addPrice = function(price) {
  this.price = price;
};


//UserInterface Logic


$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    const pizzaSize = $("#pizzaSize").val();
    console.log(pizzaSize);
    const cheese = $("#cheese").val();
    console.log(cheese);
    const pepperoni= $("#pepperoni").val();
    console.log(pepperoni);
    const anchovies = $("#anchovies").val();
    console.log(anchovies);
    const olives = $("#olives").val();
    console.log(olives);

  });
});