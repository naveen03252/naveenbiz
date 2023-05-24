var a = [1, 2, 3, 4, 5];
var b = [2, 4, 6, 8, 10];

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    if (a[i] === b[j]) {
      console.log(a[i]);
      break;
    }
  }
}


