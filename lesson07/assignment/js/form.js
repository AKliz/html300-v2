

function validateForm() {
  // Prevent the form from trying to submit to a server
  event.preventDefault()
  let name = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  let agree = document.getElementById("checkshare").checked;
  let form = document.querySelector(".needs-validation");
  let resubmit = document.querySelector(".was-validation");
  let alertBox = document.querySelector(".alert-success");
 console.log (email)

// form.classList.remove("needs-validation");
form.classList.add("was-validated");

  if (name === "") {
    document.getElementById
    alert("First name must be filled out");
    console.log ("no name");
  } else {
    console.log(name);
  }



   if (agree == true){
     console.log("Agreed to receiving emails.");
  } else {
    alert("You must agree to receiving emails.");
    console.log("Didn't agree to receiving emails.");
  }

  if (name !== "" & agree == true & email !== "" ){
    alertBox.classList.add("show");
    console.log ("show success alert");
  }
  else{

    console.log ("not successful", name, agree, email);

  }

}
