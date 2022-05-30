document.querySelector("form").addEventListener("submit",placeOrder);
let kajal;
function placeOrder(event){
    event.preventDefault();
    // console.log(placeOrder)

    bag=setInterval(callback,0);
    bag2=setInterval(callback2,3000);
    bag3=setInterval(callback3,8000);
    bag4=setInterval(callback4,10000);
    bag5=setInterval(callback5,12000);
}
//    assign callback function to alert
function callback(){
    alert("your order is accepted");
    clearInterval(bag);
}
function callback2(){
    alert("your order is being prepared");
    clearInterval(bag2);
}
function callback3(){
    alert("your order is being packed");
    clearInterval(bag3);
}
function callback4(){
    alert("your order is out for delivery");
    clearInterval(bag4);
}
function callback5(){
    alert("order delivered");
    clearInterval(bag5);
}
//   console.log(bag)