var rect = require("./rectangle");

// var rect = {
//   perimeter: (x, y) => 2 * (x + y),
//   area: (x, y) => x * y
// };

function solvereact(l, b) {
  console.log(`Solving for values of both ${l} and ${b}`);
  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("Error is ", err.message);
    } else {
      console.log(`The area of the L ${l} and B  ${b} is ` + rectangle.area());
      console.log(
        `The perimeter of the L ${l} and B ${b} is` + rectangle.perimeter()
      );
    }
  });

  console.log("This message is after the call to rect");
}

solvereact(4, 5);
solvereact(0, 6);
solvereact(-3, 5);
solvereact(1, 51);
solvereact(4, 0);
