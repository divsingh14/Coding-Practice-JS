/*

*
**
***
****
*****

 */

let n = 5,
  i = 0,
  s = "";

while (i < n) {
  let j = 0;
  while (j <= i) {
    s += "*";
    j++;
  }
  s += "\n";
  i++;
}

console.log(s);
