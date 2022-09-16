let oldoldf = 1;
let oldf = 1;
let newf;
let n = prompt("Enter number");
if (!isNaN(n)) {
  n--;
  document.write("1 1 ");
  for (let i = 1; i < n; i++) {
    newf = oldoldf + oldf;
    oldoldf = oldf;
    oldf = newf;
    document.write(newf + " ");
  }
} else alert("ERROR");
