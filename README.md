# Pizza Parlor

#### A project to show understanding of JavaScript Objects and methods. A user should be able to order a pizza, choose toppings, choose size of pizza and the webpage should return the cost of the pizza dependent on size and toppings chosen.

#### By Shane Graff

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery
* Vs Code
* JavaScript Objects
* Looping

## Description
A web page where a customer can order a pizza by size and toppings. Upon submitting the order, the page should return the cost of the pizza based on size and number of toppings chosen.

## Setup/Installation Requirements

* Clone repository to directory of your choice or (git clone https://github.com/ShanGGraff/pizza_parlor) or
* Fork website from https://github.com/ShanGGraff/pizza_parlor

## Specs
Allow the user to choose toppings and size for the pizza they'd like to order.
Create a pizza object constructor with properties for toppings and size.
Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

Describe: Order Object
Test1: "Create an object to hold pizza objects and assign an id to each pizza object"
Expect(let order = new Order(); order { pizzas: {}, currentID: 0 })
  
Test2: "Add prototype method to Order object to create a unique id for every pizza object created"
Expect(let order1 = new Order(); order { pizzas: {}, currentID: 1 })
Expect(let order2 = new Order(); order { pizzas: {}, currentID: 2 }

Test3: "Add prototype method to add pizza objects to order object"
Expect(let pizza = new Pizza("large", ["pepperoni", "cheese"]);  pizza {size: 'large', ingredients: [ 'pepporini', 'cheese']}

## Known Bugs


## License
MIT

Copyright (c) 2021 Creators 

## Contact Information
Shane Graff <copellius@gmail.com>
Github page: https://github.com/ShanGGraff
LinkedIn: https://www.linkedin.com/in/shanegraff/