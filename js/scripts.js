//Business Logic

function Pizza() {
  this.size = "";
  this.ingredients = [];
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

//Utility Logic
function createIngredientsArray(cheese, pepperoni, anchovies, olives) {
  let ingredientsArray = [cheese, pepperoni, anchovies, olives];
  let finalIngredientsArray = [];
  
  ingredientsArray.forEach(function(ingredient, index) {
    if (index === 0 && ingredient === "Yes")
      finalIngredientsArray.push("cheese");

    if (index === 1 && ingredient === "Yes")
      finalIngredientsArray.push("pepperoni");

    if (index === 2 && ingredient === "Yes")
      finalIngredientsArray.push("anchovies");

    if (index === 3 && ingredient === "Yes")
      finalIngredientsArray.push("olives");

  });

  return finalIngredientsArray;

}

//UserInterface Logic


$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    const pizzaSize = $("#pizzaSize").val();
    const cheese = $("#cheese").val();
    const pepperoni= $("#pepperoni").val();
    const anchovies = $("#anchovies").val();
    const olives = $("#olives").val();


  });
});