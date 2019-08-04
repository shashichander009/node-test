var rect = require("./test");

// var rect = {
//   perimeter: (x, y) => 2 * (x + y),
//   area: (x, y) => x * y
// };

function solvereact(l, b) {
  console.log(`Solving for area of ${l} and ${b}`);
  if (l <= 0 || b <= 0) {
    console.log("Both L and B should be greater than 0");
  } else {
    console.log(" The perimter is " + rect.perimeter(l, b));
    console.log(" The area is " + rect.area(l, b));
  }
}

solvereact(4, 5);
solvereact(0, 6);
solvereact(-3, 5);
solvereact(1, 51);
solvereact(4, 0);
