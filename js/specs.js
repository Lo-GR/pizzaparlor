
Describe: Pizza.prototype.findPrice
// Test: "it returns a price based on the property of "this.price" from a Pizza object"
// Expect(Pizza.prototype.findPrice(pizzaObject).toEqual(10))
Test: "it returns a price adjusted by having bacon be a property of a pizza object"
Expect(Pizza.prototype.findPrice().toEqual(11))
Test: "it returns a price adjusted by having Pineapple be a property of a pizza object"
Expect(Pizza.prototype.findPrice().toEqual(12))
Test: "it returns a price adjusted by the size property of a pizza objet, 'expect' based on selecting small"
Expect(Pizza.prototype.findPrice().toEqual(8))

function Pizza(){
  this.meat
  this.cheese 
  this.sauce 
  this.extra 
  this.size
  this.price = 10;
}

pizza = new Pizza;

Pizza.prototype.findPrice = function(){
  this.price = 10;
  if (this.meat === "Bacon"){
    this.price += 1;
  }
  return pizzaObject.price;
}