// Question No. 05

// a
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
} // Reasom

// This is True because the value of a is incremented (++a) before the comparison, so a becomes 5.

// b
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
} // Reasom

// This is False because the value of b is compared with 83 before it is incremented (b++).

// c
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
} // Reasom

// Only the condition 2 & 4 is true because of the post and pre Increment 

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
} // Reasom

// This is True because the totalCost variable is calculated as the sum of materialCost and laborCost

// e
if (true){
    alert("True");
}
if (false){
    alert("False");
} // Reasom

// Only "True" conditions will be displayed. It is because the first if statement is true.

// f
if("car" < "cat"){
    alert("car is smaller than cat");
} // Reasom

// This is the True condition