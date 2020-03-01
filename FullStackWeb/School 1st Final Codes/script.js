
function idCard(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
      document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
    var addRess = document.getElementById("address").value;
      document.getElementById("postAddress").innerHTML = addRess 

    var age = parseInt(document.getElementById("age").value);
    var phoneNumber = parseInt(document.getElementById("phoneNumber").value); 
  
    var numberArray = [];
      numberArray.push(age);
      numberArray.push(phoneNumber);     
  for (var i = 0; i < numberArray.length; i++){
       if (numberArray[i] <= 100){
        document.getElementById("postAge").innerHTML = "Age: " + age;
      } 
      else if (numberArray[i] > 100){
        document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
      }
  }
}
