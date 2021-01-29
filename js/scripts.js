function Pizza(){
  this.meat
  this.cheese 
  this.sauce 
  this.extra 
  this.size
  this.price = 10;
}

pizza = new Pizza;
pizza.meat = "Bacon"

Pizza.prototype.findPrice = function(){
  if (this.meat === "Bacon"){
    this.price += 1;
  }
  return this.price;
}

$(document).ready(function() {

});