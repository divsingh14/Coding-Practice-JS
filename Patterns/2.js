/*

*****
*   *
*   *
*   *
*****

 */

let n = 5,
  i = 0,
  s = "";

while (i < n) {
  let j = 0;
  while (j < n) {
    if (i === 0 || i === n - 1) {
      s += "*";
    } else {
      if (j === 0 || j === n - 1) {
        s += "*";
      } else {
        s += " ";
      }
    }
    j++;
  }
  s += "\n";
  i++;
}

console.log(s);
