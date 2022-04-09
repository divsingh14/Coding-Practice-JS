/*

    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *

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

  let k = i * 2;
  while (k >= 0) {
    if (k === 0 || k === i * 2) {
      s += "*";
    } else {
      s += " ";
    }
    k--;
  }

  s += "\n";
  i++;
}

i = 1;
while (i < n) {
  let j = 0;

  while (j <= i) {
    s += " ";
    j++;
  }
  let k = (n - i - 1) * 2;
  while (k >= 0) {
    if (k === 0 || k === (n - i - 1) * 2) {
      s += "*";
    } else {
      s += " ";
    }
    k--;
  }

  s += "\n";
  i++;
}

console.log(s);
