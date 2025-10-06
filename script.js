const slider = document.getElementById('charSlider');
const sliderValue = document.getElementById('sliderValue');
const senha = document.getElementById('senhaGerada')
const titulo = document.getElementById('titulo')
const icon = document.getElementById('copy')

let passwordLength = Number(slider.value);
let includesLowerCase = true;
let includesUpperCase = true;
let includesNumbers = true;
let includesSymbols = true;

slider.addEventListener('input', () => {
  sliderValue.textContent = slider.value;
});

// Gerador de senha
function generatePassword() {
  const length = Number(slider.value); // valor atual do slider
  const includesLowerCase = document.getElementById('chk2').checked;
  const includesUpperCase = document.getElementById('chk1').checked;
  const includesNumbers = document.getElementById('chk3').checked;
  const includesSymbols = document.getElementById('chk4').checked;

  const lowerCaseChars = "abcdefghijklmnopqrstuvxwyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVXWYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%¨&*ç-=+?;.,§¢£_~^|\/";

  let allowedChars = "";
  let password = "";

  allowedChars += includesLowerCase ? lowerCaseChars : "";
  allowedChars += includesUpperCase ? upperCaseChars : "";
  allowedChars += includesNumbers ? numberChars : "";
  allowedChars += includesSymbols ? symbolChars : "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  if (allowedChars.length === 0 || allowedChars == "") {
    titulo.style.transform = "translateY(40%)";
    titulo.style.color = "var(--error)"
    titulo.style.fontWeight = "500"
    titulo.textContent = "Selecione pelo menos uma opção no Passo 1: Configuração";
    icon.style.display = "none";
    senha.textContent = "";
  } else {
    titulo.style.transform = "translateY(0%)";
    titulo.style.color = "var(--success)"
    titulo.textContent = "Senha gerada!";
    icon.style.display = "block";
    senha.textContent = password;
  }



  // Atualiza a interface

}


icon.addEventListener('click', () => {
  const textToCopy = senha.textContent;

  // cria textarea temporário
  const textarea = document.createElement('textarea');
  textarea.value = textToCopy;
  document.body.appendChild(textarea);

  // seleciona o texto
  textarea.select();
  textarea.setSelectionRange(0, 99999); // para mobile

  // copia
  try {
    document.execCommand('copy'); // compatível com todos os navegadores
    alert('Senha copiada para a área de transferência!');
  } catch (err) {
    console.error('Erro ao copiar: ', err);
  }

  // remove textarea
  document.body.removeChild(textarea);
});





// icon.addEventListener('click', () => {
//   const textToCopy = senha.textContent;

//   // Copia para a área de transferência
//   navigator.clipboard.writeText(textToCopy).then(() => {
//     alert('Senha copiada para a área de transferência!');
//   }).catch(err => {
//     console.error('Erro ao copiar: ', err);
//   });
// });




// const password = generatePassword(passwordLength, includesLowerCase, includesUpperCase, includesNumbers, includesSymbols);