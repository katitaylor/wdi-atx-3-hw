
var firstName = prompt("What is your first name?");
  console.log("Hello, " + firstName);

console.log("There is a possible chemical spill and we need an ICS commander.")

var ICS = prompt("Have you led an ICS incident before? yes or no");
  switch (ICS) {
  case "yes":
    console.log("Great! We need you.");
    break;
  case "no":
    console.log("It may be a long night.");
    break;
}


var need = prompt("How many gallons have spilled, between 1 - 100?");
 if (need <= 20) {
 console.log(need + " is not too much. Let's get the kitty litter.");
} else
    if (need <= 60) {
 console.log(need + " is enough for HazMat team.");
} else
  if (need <= 100) {
 console.log("We will have to call local authorities.")
}




/*

another version::
var firstName = prompt("What is your first name?");
  firstName = ("Hello, " + firstName);

var ICS = prompt("Have you led an ICS incident before?");
  if (ICS == yes) {
  console.log("Great! We need you.");
  }
  else {
  console.log("This might be a long night.");
  }


++++
var firstName = prompt("What is your first name?");
  firstName = alert("Hello, " + firstName);

var ICS = prompt("Have you led an ICS incident before? yes or no")
  if (prompt = "yes"){
  console.log("Great! We need you.")
}
  else {
  console.log("This might be a long night.");
  }


+++

var firstName = prompt("What is your first name?");
  firstName = alert("Hello, " + firstName);

var ICS = prompt("Have you led an ICS incident before? yes or no")
  if (ICS = "yes"){
  console.log("Great! We need you.");
  }
  else {
  console.log("This might be a long night.")
  }
*/


