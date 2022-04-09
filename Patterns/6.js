/*

*
**
* *
*  *
*   *
******

*/

let n = 5,
  i = 0,
  s = "";

while (i <= n) {
  let j = 0;
  while (j <= i) {
    if (i !== 0 && i !== n) {
      if (j !== 0 && j !== i) {
        s += " ";
      } else {
        s += "*";
      }
    } else {
      s += "*";
    }

    j++;
  }

  s += "\n";
  i++;
}

console.log(s);
