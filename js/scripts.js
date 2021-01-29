function Pizza(){
  this.meat
  this.cheese 
  this.sauce 
  this.extra 
  this.size
  this.price = 10;
}

pizza = new Pizza;
// pizza.meat = "Bacon"
// pizza.extra = "Pineapple"
pizza.size = "Small"

Pizza.prototype.findPrice = function(){
  this.price = 10;
  if (this.meat === "Bacon"){
    this.price += 1;
  }
  if (this.extra === "Pineapple"){
    this.price += 2;
  }
  if (this.size === "Small"){
    this.price -= 2;
  } else if (this.size === "Large"){
    this.price += 2;
  }
  return this.price;
}

$(document).ready(function() {

});