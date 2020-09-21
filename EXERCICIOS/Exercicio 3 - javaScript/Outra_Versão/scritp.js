const convertTemp = () => {
  let temp = document.getElementById("temp").value;
  if (temp.length < 1) {
    alert("Por favor, digite um valor para continuar.");
  } else {
    let f = temp * 1.8 + 32;
    document.getElementById("result").innerHTML = "Resultado em F:" + f;
  }
};

const subString = () => {
  let string = document.getElementById("string").value;
  let sub = document.getElementById("sub-string").value;
  let count = string.split(sub).length - 1;
  let txt = count.length > 1 ? "vezes" : "vez";
  document.getElementById("result-2").innerHTML =
    "Ocorreu " + count + " " + txt;
};

const biggestWord = () => {
  let big = "";
  let string = document.getElementById("string-3").value;
  string.split(" ").forEach((word) => {
    if (word.trim().length > big.length) {
      big = word.trim();
    }
  });
  document.getElementById("result-3").innerHTML = "Maior palavra: " + big;
};

const sumArray = () => {
  let array = document.getElementById("string-4").value;
  let removeSeparation = Array.from(array.split(","), Number);
  let sumArray = 0;
  let productArray = 0;
  removeSeparation.map((i) => {
    sumArray += i;
  });
  productArray = removeSeparation.reduce(
    (acumulador, item) => acumulador * item
  );
  document.getElementById("result-4").innerHTML =
    "Soma: " + sumArray + " Produto: " + productArray;
};

const myAge = () => {
  let date = document.getElementById("string-5").value;
  let dateSplit = Array.from(date.split("-"), Number);
  let year = new Date().getFullYear();
  let mouth = new Date().getMonth();
  let age = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  dateSplit[1] < mouth
    ? (age = year - dateSplit[0])
    : (age = year - dateSplit[0] - 1);

  days = age * 365;
  hours = days * 24;
  minutes = hours * 60;
  seconds = minutes * 60;
  document.getElementById("result-5").innerHTML =
    "Anos: " +
    age +
    " Dias: " +
    days +
    " Horas: " +
    hours +
    " Minutos: " +
    minutes +
    " Segundos: " +
    seconds;
};

const makeContinha = () => {
  let num1 = parseInt(document.getElementById("string-6").value);
  let num2 = parseInt(document.getElementById("string-7").value);
  let sum = num1 + num2;
  let sub = num1 - num2;
  let mul = num1 * num2;
  let div = num1 / num2;
  let res = num1 % num2;

  document.getElementById("result-7").innerHTML = num1 + " + " + num2;
  document.getElementById("result-8").innerHTML = sum;
  document.getElementById("result-9").innerHTML = num1 + " - " + num2;
  document.getElementById("result-10").innerHTML = sub;
  document.getElementById("result-11").innerHTML = num1 + " * " + num2;
  document.getElementById("result-12").innerHTML = mul;
  document.getElementById("result-13").innerHTML = num1 + " / " + num2;
  document.getElementById("result-14").innerHTML = div;
  document.getElementById("result-15").innerHTML = num1 + " % " + num2;
  document.getElementById("result-16").innerHTML = res;
};

const newSalary = () => {
  let num1 = parseInt(document.getElementById("string-8").value);
  let add = 0;
  let porcente = "";
  let diferece = 0;

  if (num1 <= 280) {
    add = num1 * 1.2;
    porcente = "20%";
    diferece = add - num1;
  } else if (num1 > 280 && num1 <= 700) {
    add = num1 * 1.15;
    porcente = "15%";
    diferece = add - num1;
  } else if (num1 > 700 && num1 <= 1500) {
    add = num1 * 1.2;
    porcente = "10%";
    diferece = add - num1;
  } else if (num1 > 1500) {
    add = num1 * 1.05;
    porcente = "5%";
    diferece = add - num1;
  }
  document.getElementById("result-17").innerHTML =
    "Salário antes: " +
    num1 +
    " Porcentual: " +
    porcente +
    " Valor aumentado: " +
    diferece +
    " Novo valor: " +
    add;
};

const formatDate = () => {
  let date = document.getElementById("string-9").value;
  let split = date.split("-");
  let mouth = "";
  switch (split[1]) {
    case "01":
      mouth = "Janeiro";
      break;
    case "02":
      mouth = "Fevereiro";
      break;
    case "03":
      mouth = "Março";
      break;
    case "04":
      mouth = "Abril";
      break;
    case "05":
      mouth = "Maio";
      break;
    case "06":
      mouth = "Junho";
      break;
    case "07":
      mouth = "Julho";
      break;
    case "08":
      mouth = "Agosto";
      break;
    case "09":
      mouth = "Setembro";
      break;
    case "10":
      mouth = "Outubro";
      break;
    case "11":
      mouth = "Novembro";
      break;
    case "12":
      mouth = "Dezembro";
      break;

    default:
      break;
  }
  console.log(split);
  document.getElementById("result-18").innerHTML =
    split[2] + " de " + mouth + " de " + split[0];
};

const height = () => {
  let num1 = parseFloat(document.getElementById("string-10").value);
  let num2 = parseFloat(document.getElementById("string-11").value);
  let num3 = parseFloat(document.getElementById("string-12").value);
  let num4 = parseFloat(document.getElementById("string-13").value);
  let num5 = parseFloat(document.getElementById("string-14").value);

  let name1 = document.getElementById("string-15").value;
  let name2 = document.getElementById("string-16").value;
  let name3 = document.getElementById("string-17").value;
  let name4 = document.getElementById("string-18").value;
  let name5 = document.getElementById("string-19").value;
  let array = [name1, num1, name2, num2, name3, num3, name4, num4, name5, num5];
  let onlyNumber = [num1, num2, num3, num4, num5];
  let isEmpty = false;

  array.map((item) => {
    if (item.length == 0) isEmpty = true;
  });

  if (isEmpty) alert("Preencha todos os campos");

  let max = onlyNumber.reduce((a, b) => {
    return Math.max(a, b);
  });

  let numberIdex = array.indexOf(max);
  let name = array[numberIdex - 1];
  console.log(max, name);
  document.getElementById("result-19").innerHTML =
    "Pessoa mais alta é " + name + "e sua altura é de " + max;
};
