/*

    *
   **
  ***
 ****
*****

*/

let n = 5,
  i = 1,
  s = "";

while (i <= n) {
  let j = n - i;
  let k = i;

  while (j--) {
    s += " ";
  }

  while (k--) {
    s += "*";
  }
  s += "\n";
  i++;
}

console.log(s);
