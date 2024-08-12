let n = 145;
let m = n;
let d;
let s = 0;
let f;
while (m) {
  d = m % 10;
  f = 1;
  if (d != 0) for (let j = d; j >= 1; j--) f = f * j;
  s = s + f;
  m = Math.floor(m / 10);
}

if (s === n) op.value = "strong Number";
else op.value = "Not a strong Number";
