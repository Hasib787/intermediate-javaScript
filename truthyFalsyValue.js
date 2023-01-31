//Remove falsy value from any array
let allFriends = ["Aman","Noman",false,"Mehedi",NaN, 0, undefined, "Rubel", null, "", "Fuhad"];

// passing Boolean to array.filter() will come remove falsy values from array 
let friends = allFriends.filter(Boolean);

console.log(friends);  //[ 'Aman', 'Noman', 'Mehedi', 'Rubel', 'Fuhad' ]