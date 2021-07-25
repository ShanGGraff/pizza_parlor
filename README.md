# Pizza Parlor

#### A project to demonstrate understanding of JavaScript Objects and methods. A user should be able to order a pizza, choose toppings, choose size of pizza and the webpage should return the cost of the pizza dependent on size and toppings chosen.

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
User is able to choose size of pizza and ingredients from dropdown menus. A pizza object is created on submit with constructors for size and indredients. A helper function is used to create and array of ingredients from the input, and then another helper function is used to calculate the cost of the pizza in total. Next, a prototype method is used to add the cost of the pizza to the Pizza object. The cost of the pizza is diplayed on the index.html page.

Describe: Pizza Object
Test1: "Create a Pizza object with constructors for size of pizza and ingredients"
Expect(let pizza = new Pizza(); pizza { size: empty string, ingredients: [] })
  
Test1: "Add prototype method to add pizza cost to Pizza object "
Expect(pizza.addPrice(price)); pizza 

## Known Bugs
An object is created but never used for output on the index.html page
Need to add more tests

## License
MIT

Copyright (c) 2021 Creators 

## Contact Information
Shane Graff <copellius@gmail.com>
Github page: https://github.com/ShanGGraff
LinkedIn: https://www.linkedin.com/in/shanegraff/