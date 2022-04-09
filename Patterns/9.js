/*

    *
   * *
  *   *
 *     *
*********

*/

let n = 5,
  i = 0,
  s = "";

while (i < n) {
  let j = n - i;

  while (j > 0) {
    s += " ";
    j--;
  }

  let k = i * 2;

  while (k >= 0) {
    if (i === 0 || i === n - 1) {
      s += "*";
    } else {
      if (k === 0 || k === i * 2) {
        s += "*";
      } else {
        s += " ";
      }
    }
    k--;
  }
  s += "\n";
  i++;
}

console.log(s);
