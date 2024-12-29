
document.getElementById(display)

function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = "";
}

function deleteLastChar() {
  let lastChar = document.getElementById('display');
  lastChar.value = lastChar.value.slice(0, -1);
}

function calculate() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch {
    document.getElementById('display').value = 'Error!';
  }
}