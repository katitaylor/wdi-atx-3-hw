// Make sure to psuedocode out your adventure!!!
// One way to get input is to use the prompt() command
// You can have your adventure play out using alerts or in the console using console.log().


var firstName = prompt("What is your first name?");
  alert("Hello, " + firstName);

alert("There is a possible chemical spill and we need an ICS commander.")

var ICS = prompt("Have you led an ICS incident before? yes or no");
  switch (ICS) {
  case "yes":
    alert("Great! We need you.");
    break;
  case "no":
    alert("It may be a long night.");
    break;
}

var need = prompt("How many gallons have spilled, between 1 - 100?");
 if (need <= 20) {
 alert(need + " is not too much. Let's get the kitty litter.");
} else
    if (need <= 60) {
 alert(need + " is enough for HazMat team.");
} else
  if (need <= 100) {
 alert("We will have to call local authorities.")
}

