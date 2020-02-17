/*Add the JavaScript here for the function billingFunction(). 
It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){
    var name = document.getElementById("shippingName");
    var zip = document.getElementById("shippingZip");
    var billName = document.getElementById("billingName");
    var billZip = document.getElementById("billingZip");
    var same = document.getElementById("same");
    
    if(same.checked ){
        billName.value = name.value;
        billZip.value = zip.value;
    }
    
}
function Verify(){
    var name = document.getElementById("shippingName");
    var zip = document.getElementById("shippingZip");
    var billName = document.getElementById("billingName");
    var billZip = document.getElementById("billingZip");
    var same = document.getElementById("same");


    if(name.value === billName.value && zip.value === billZip.value){
        alert("Your entries are match!");
    }
    else{
        alert("Shipping and Billing information are not the same!");
    }

}
Verify();