//Business Logic

function Pizza() {
  this.size = "";
  this.ingredients = [];
  this.price = 0;
}

Pizza.prototype.addSize = function(size) {
  this.size = size;
};

Pizza.prototype.addIngredients = function(ingredients) {
  this.ingredients = ingredients;
};

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