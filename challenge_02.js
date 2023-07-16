/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

const fName = prompt("Bitte Namen eingeben!");
let alter = parseInt(prompt("Bitte nennen Sie ihr Alter!"));

// alterZahl = parseFloat(alter);
console.log("Name: " + fName);
console.log("Alter: " + alter);
console.log(typeof fName);
console.log(typeof alter);



baby = (alter <= 5);
kid = (alter <= 6 && alter <=12);
teen = (alter >= 13 && alter <= 17);

// switch (alter) {
//     case baby:

//         console.log("Milch");
        
//         break;

//     case kid:

//         console.log("Saft");
        
//         break;

//     case teen:

//         console.log("Cola");
        
//         break;

//     default:

//     console.log("Adult! Scotch immedietly!");
//         break;
// }

if (baby) {

    console.log("Milch");
}
else if (kid) {

console.log("Saft");
}
else if (teen){
    console.log("Cola");

    
} else {
    console.log("Adult! Scotch immedietly!");
    
}



