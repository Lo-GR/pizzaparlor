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
    let meatChoice = $("input:radio[name=meat]:checked").val(); 
    pizza.meat = meatChoice;
    console.log(pizza.meat);
  });
});