/*
 
 *****
 *****
 *****
 *****
 *****

 */

let n = 5,
  i = 0;

let s = "";

while (i < n) {
  let j = 0;
  while (j < 5) {
    s += "*";
    j++;
  }
  s += "\n";
  i++;
}

console.log(s);
