let count = 0;
function remove() {
  let valor = document.getElementById("in").value;
  document.getElementById("in").value = valor.slice(0, valor.length - 1);
}
function verify_calculator() {
  let valor = document.getElementById("in").value;
  console.log(valor)
  if (-1 != valor.indexOf("x")) {
    while (-1 != valor.indexOf("x")) {
      valor = valor.replace("x", "*")
      console.log(valor)
    }
  }
  if (-1 != valor.indexOf("÷")) {
    while (-1 != valor.indexOf("÷"))
    {
      valor = valor.replace("÷", "/");
      console.log(valor)
    }
  }
  if (-1 != valor.indexOf("^")) {
    while (-1 != valor.indexOf("^")) {
      valor = valor.replace("^", "**");
    }
  }
  document.getElementById("in").value =eval(valor);
}
function write_digit(digit){
  count++;
  if (count == 1) {
    document.getElementById("in").value="";
  }
  document.getElementById("in").value+=digit;
}

document.getElementById("in").value="0"