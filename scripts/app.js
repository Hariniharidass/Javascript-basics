/*************************************************************************************************
 *                                          Exercise 1 :
 *************************************************************************************************/
console.log("Exercise 1 :");
console.log("Hello World");
/*************************************************************************************************
 *                                          Exercise 2 :
 *************************************************************************************************/
console.log("Exercise 2 :");
let my_name = "Harini";
let my_age = 35;
let my_favourite_color = "black";
console.log("My name is " + my_name + ". I'm " + my_age + " years old and my favourite color is " + my_favourite_color)
/*************************************************************************************************
 *                                          Exercise 3 :
 *************************************************************************************************/
console.log("Exercise 3 :");
let first_number = 20;
let second_number = 10;
console.log(" \r\n Adding " + first_number + " + " + second_number + " = " + (first_number + second_number));
console.log(" \r\n Subtracting " + first_number + " - " + second_number + " = " + (first_number - second_number));
console.log(" \r\n Multiplying " + first_number + " * " + second_number + " = " + (first_number * second_number));
console.log(" \r\n Dividing " + first_number + " / " + second_number + " = " + (first_number / second_number));
/**
 * Used Swtich case with prompt, console.log and alert)
 */
let select = prompt("What do you want to perform ?  \r\n 1. Addition  \r\n 2. Subtraction  \r\n 3. Multiplication  \r\n 4. Division  \r\n Enter the number of your choice between 1 - 4  \r\n")
let choice = parseInt(select);
switch (choice) {
    case 1:
        alert(" \r\n Adding " + first_number + " + " + second_number + " = " + (first_number + second_number));
        break;
    case 2:
        alert(" \r\n Subtracting " + first_number + " - " + second_number + " = " + (first_number - second_number));
        break;
    case 3:
        alert(" \r\n Multiplying " + first_number + " * " + second_number + " = " + (first_number * second_number));
        break;
    case 4:
        alert(" \r\n Dividing " + first_number + " / " + second_number + " = " + (first_number / second_number));
        break;
    default:
        console.log("Printing from default");
        console.log(" \r\n Adding " + first_number + " + " + second_number + " = " + (first_number + second_number));
        console.log(" \r\n Subtracting " + first_number + " - " + second_number + " = " + (first_number - second_number));
        console.log(" \r\n Multiplying " + first_number + " * " + second_number + " = " + (first_number * second_number));
        console.log(" \r\n Dividing " + first_number + " / " + second_number + " = " + (first_number / second_number));
}