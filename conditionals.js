// COMPARISON OPERATORS
console.log(1 > 2);
console.log(1 < 2);
console.log(1 <= 2);
console.log(1 >= 2);
let rating = 2;
if (rating === 3) {
    console.log('YOU ARE A SUPERSTAR!')
}
else  if (rating === 2) {console.log("MEETS EXPECTATIONS");}
let days = 7 
if (days === 7)
console.log("sunday");
else if (days === 6){console.log("saturday")}

// CREATE A VARIABLE WITH NAME password and give any value
// THE VALUE OF THE NAME MUST BE A STRING
// VALUE OF PASSWORD MUST BE GREATER THAN OR EQUALS TO 6 CHARACTERS
//ENSURE THE VALUE OF THE PASSWORD HAS NO SPACES BETWEEN
let password ="kabambe";
if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("THE PASSWORD IS CORRECT");
    }
    else {
        console.log("INCORRECT PASSWORD");
    }
}

let age = 20;
console.log(age === 10 ? "correct age" : "wrong age");

    

