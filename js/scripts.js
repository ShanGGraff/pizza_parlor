//Business Logic
function Order() {
  this.pizzas = {};
  this.currentID = 0;
}
  
Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Order.prototype.addPizza = function(pizza) {
  contact.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
};

Order.prototype.findPizza = function(id) {
  if (this.pizzas[id] != undefined) {
    return this.pizzas[id];
  }
  return false;
};


function Pizza(size, ingredients) {
  this.size = size;
  this.ingredients = ingredients;
}

function Costs() {
  small: ;

}

//UserInterface Logic
let order = new Order();

$(document).ready(function() {
  $("form#language").submit(function(event) {
    event.preventDefault();


    
  });
});