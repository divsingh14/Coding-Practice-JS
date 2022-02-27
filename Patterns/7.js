/*

    *
   ***
  *****
 *******
*********

*/

let n = 5,
  i = 0,
  s = "";

while (i < n) {
  let j = n - i;

  while (j) {
    s += " ";
    j--;
  }

  s += "*".repeat(i * 2) + "*\n";
  i++;
}

console.log(s);
