function numType(val) {
    if (val > 0) { //check whether the given number is greater than 0
        return val + " is a positive number"; 
    } else if(val < 0){ // Check whether the given number is less than 0
        return val + " is a negative number";
    } else{ // Handle the case when the given number is 0
        return val + " is a neutral number";
    }  
}
let val = 0; // Declare and initialize the variable val with the value 0

const result = numType(val); // Call the numType function and store the returned value

console.log(result); // returned result