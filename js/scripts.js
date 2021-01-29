function Pizza(){
  this.meat
  this.cheese 
  this.sauce 
  this.extra 
  this.size
  this.price = 10;
}

pizza = new Pizza;

Pizza.prototype.findPrice = function(pizzaObject){
  return this.price;
}

$(document).ready(function() {

});