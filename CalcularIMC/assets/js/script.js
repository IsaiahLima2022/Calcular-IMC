// estou selecionando meu formulario
const form = document.querySelector(".form");
// estou selecionado um evendo com uma funcão
form.addEventListener("submit", (e) => {
  // estou prevenido um evento
  e.preventDefault();
  // selecione no formulario os input(entrada)
  const inputPeso = e.target.querySelector(".peso");
  const inputAltura = e.target.querySelector(".altura");
  // ao usuario digite qualquer valor é convertido para numero, o (.value) estou querendo pegar qualquer valor do input(entrada)
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  // esses if(se), caso que usuario não colocar valor nenhum, é para retornar falso e mostrar uma mensagem na tela
  if (!peso) {
    setResult("Peso inválido", false);
    return;
  }
  // esses if(se), caso que usuario não colocar valor nenhum, é para retornar falso e mostrar uma mensagem na tela
  if (!altura) {
    setResult("Altura inválido", false);
    return;
  }
  // esses const somente para armezanar as funcão e para ser executado
  const imc = getImc();
  const imcTaxa = getNivelImc(imc);
  // esses const somente para armezanar as funcão e para ser executado
  const msg = `Seu IMC é ${imc} (${imcTaxa})`;
  // retornado a função e colocando valores elas
  setResult(msg, true);
});
// foi criando um função para mostrar IMC pro usuario
function getNivelImc(imc) {
  const taxaImc = [
    "Abaixo do peso",
    "Peso Normal",
    "sobrepeso",
    "Obesidade Grau 1",
    "Obesidade Grau 2",
    "Obesidade Grau 3",
  ];

  if (imc >= 39.9) return taxaImc[5];
  if (imc >= 34.9) return taxaImc[4];
  if (imc >= 29.9) return taxaImc[3];
  if (imc >= 24.9) return taxaImc[2];
  if (imc >= 18.5) return taxaImc[1];
  if (imc < 18.5) return taxaImc[0];
}
// essa função é para calcular o IMC
function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}
// essa funcao apenas para criar elemento de paragrafo
function paragrafo() {
  const p = document.createElement("p");
  return p;
}
// essa funcão está segunte: têm dois valores
function setResult(msg, isValid) {
  // selecionado uma div do meu html
  const resul = document.querySelector("#resul");
  // Armazenado a minha funcão tag (p)
  const p = paragrafo();
  // mostrar pro usuario. Algo que ele(a) digitou estar inválido
  if (isValid) {
    p.classList.add("paragrafo");
  } else {
    p.classList.add("invalido");
  }
  // mostrando a mesma pro usuario
  resul.innerHTML = msg;
}
