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

function finalCostOfPizza(size, ingredients) {
  let finalCost = 0;
    if (size === "Small") {
      finalCost += 12.00;
    } else if (size === "Large") {
      finalCost += 15.00;
    } else {
      finalCost += 20.00;
    }

    ingredients.forEach(function(ingredient) {
      if (ingredient === "cheese")
        finalCost += 2.00;
      
      if (ingredient === "pepperoni")
        finalCost += 1.50

      if (ingredient === "anchovies")
        finalCost += 2.50;

      if (ingredient === "olives")
        finalCost += 1.50

    });

    return finalCost;

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

    finalIngredientArray = createIngredientsArray(cheese, pepperoni, anchovies, olives);
    console.log(finalIngredientArray);

    priceOfPizza = finalCostOfPizza(pizzaSize, finalIngredientArray);
    console.log(priceOfPizza);

    let pizzaOrder = new Pizza();
    console.log(pizzaOrder);

    pizzaOrder.addPrice(priceOfPizza);
    console.log(pizzaOrder);

    pizzaOrder.addIngredients(finalIngredientArray);
    console.log(pizzaOrder);

    pizzaOrder.addSize(pizzaSize);
    console.log(pizzaOrder);


  });
});