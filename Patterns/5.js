/*

*****
****
***
**
*

*/

let n = 5,
  i = 0,
  s = "";

while (i < n) {
  let j = n - i;
  while (j > 0) {
    s += "*";
    j--;
  }
  s += "\n";
  i++;
}

console.log(s);
