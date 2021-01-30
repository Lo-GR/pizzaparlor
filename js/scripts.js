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
  } else if (this.meat === "Tofurkey"){
    this.price +=20
  }
  if (this.extra === "Pineapple"){
    this.price += 2;
  } else if (this.extra === "Chocolate"){
    this.price += 3;
  }
  if (this.size === "Small"){
    this.price -= 2;
  } else if (this.size === "Large"){
    this.price += 2;
  } else if (this.size === "Hamster-Sized") {
    // Price of 1 is intentional, it is hamster sized after all
    this.price = 1;
  }
  return this.price;
};

$(document).ready(function() {
  let pizza = new Pizza;
  $("#startOrder").click(function(){
    $("#startOrder").hide();
    $("form").show();
  });
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
    $("#pizzaTime").hide();
    $("#reset").show();
    $("#secretDialogue").show();
  });
  $("#reset").click(function(){
    $("#reset").hide();
    $("#pizzaTime").show();
    $("#pizzaSummary").hide();
    $("#secretDialogue").hide();
  });
  $("#response1").click(function(){
    $("#message2").show();
    $("#message1").hide();
    $("#response2").show();
    $("#response1").hide();
  });
  $("#response2").click(function(){
    $("#message3").show();
    $("#message2").hide();
    $("#response3").show();
    $("#response2").hide();
  });
  $("#response3").click(function(){
    $("#message3").hide();
    $("#response3").hide();
    $("#reset").hide();
    $("#pizzaTime").show();
    $("#pizzaSummary").hide();
    $("#secretDialogue").hide();
    $(".secretIngredient").show();
  });
});