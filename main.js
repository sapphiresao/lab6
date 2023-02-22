function exercise1() {
  console.log("Hello, World!");
  console.log("Hello, World!");
  console.log("Hello, World!");
}

exercise1();

function exercise7(num1, num2, num3) {
  return num1 * num2 * num3;
}

let product = exercise7(2, 3, 4);
console.log(product); 

function exercise14(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

let greatest = exercise14(5, 10, 3);
console.log(greatest); 
