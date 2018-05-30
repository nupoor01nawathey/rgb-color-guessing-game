var secretNumber = 4;

var guess = Number(prompt("Guess a number"));

if(guess === secretNumber) {
  alert("You got it right");
} else if ( guess > secretNumber) {
  alert("Number is too high, enter small number")
} else (
  alert("Number is too small, enter another number")
)

// nothing would be printed as prompt will always save STRING in var guess + there is === , so use Number in prompt and use === OR use == so type of var is not checked
