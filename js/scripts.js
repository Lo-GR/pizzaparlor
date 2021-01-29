function Pizza(){
  this.meat;
  this.cheese; 
  this.sauce;
  this.extra;
  this.size;
  this.price = 10;
}

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
  let pizza = new Pizza;
  $("form").submit(function(event){
    event.preventDefault();
    let sauceChoice = $("input:radio[name=sauce]:checked").val(); 
    let cheeseChoice = $("input:radio[name=cheese]:checked").val(); 
    let meatChoice = $("input:radio[name=meat]:checked").val(); 
    let extraChoice = $("input:radio[name=extra]:checked").val(); 
    let sizeChoice = $("input:radio[name=size]:checked").val(); 
    pizza.meat = meatChoice;
    pizza.sauce = sauceChoice;
    pizza.cheese = cheeseChoice;
    pizza.extra = extraChoice;
    pizza.size = sizeChoice;
    let pizzaPrice = pizza.findPrice();
    $("#pizzaOrder").text(pizza.size + ", " + pizza.meat + ", " + pizza.extra + ", " + pizza.sauce + " Pizza " + pizza.cheese);
    $("#orderTotal").text(pizzaPrice);
    $("#pizzaSummary").show();
    console.log(pizza.meat);
    console.log(pizza.sauce);
    console.log(pizza.extra);
    console.log(pizza.size);
    console.log(pizza.cheese);
  });
});