const cart = ["shoes", "pants", "kurta"];

function greet(wish){
    console.log(wish)
    console.log(wish() ,"everyone!");
  }
  
  greet(function(){
      return "Good Morning";
  })
  


createOrder(cart, function (orderID) {
    console.log(3)
    proceedToPayment(orderID)
});

function createOrder(){
    return 1
   }

