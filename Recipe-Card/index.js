
document.getElementById('ingredientsBtn').addEventListener('click', function () {
  const ingredients = document.getElementById('ingredients');
  ingredients.classList.toggle('hidden');
  this.textContent = ingredients.classList.contains('hidden') ? "Show Ingredients" : 'Hide Ingredients';

  const ingredientsList = document.getElementById('ingredients-list');
  const listItem = ingredientsList.querySelector('li');
  listItem.classList.add('list-group-item-warning');
});

document.getElementById('instructionsBtn').addEventListener('click', function () {
  const instructions = document.getElementById('instructions');
  const nextIngredientBtn = document.getElementById('nextIngredient-btn')
  if (nextIngredientBtn.textContent == "End") {
    instructions.classList.toggle('hidden');
    this.textContent = instructions.classList.contains('hidden') ? 'Show Instructions' : "Hide Instructions";
  } else {
    document.getElementById('instructionsBtn').classList.add('disabled');
    document.getElementById('ingredientsRequired-alert').classList.toggle('hidden');
  }
  const instructionsList = document.getElementById('instructions-list');
  const instructionsItem = instructionsList.querySelector('li');
  instructionsItem.classList.add('list-group-item-warning');
});

let currentIngredient = 0;

document.getElementById('nextIngredient-btn').addEventListener('click', function () {
  const ingredientsList = document.getElementById('ingredients-list');
  const listItem = ingredientsList.querySelectorAll('li');

  if (currentIngredient < listItem.length) {
    listItem[currentIngredient].classList.toggle('list-group-item-warning');
    currentIngredient++;
    if ((currentIngredient < listItem.length) && (currentIngredient === (listItem.length - 1))) {
      listItem[currentIngredient].classList.add('list-group-item-warning');
      document.getElementById('nextIngredient-btn').classList.add('disabled');
    }
    else if (currentIngredient < listItem.length) {
      listItem[currentIngredient].classList.add('list-group-item-warning');
    }
  }
  const nextBtn = document.getElementById('nextIngredient-btn');
  if (currentIngredient == (listItem.length - 1)) {
    nextBtn.textContent = 'End';
    document.getElementById('instructionsBtn').classList.toggle('disabled');
    document.getElementById('ingredientsEnd-alert').classList.toggle('hidden');

  }
});

let currentInstruction = 0;

document.getElementById('next-btn').addEventListener('click', function () {
  const instructionsList = document.getElementById('instructions-list');
  const instructionItem = instructionsList.querySelectorAll('li');

  if (currentInstruction < instructionItem.length) {
    instructionItem[currentInstruction].classList.toggle('list-group-item-warning');
    currentInstruction++;
    if ((currentInstruction < instructionItem.length) && (currentInstruction === (instructionItem.length - 1))) {
      instructionItem[currentInstruction].classList.add('list-group-item-warning');
      document.getElementById('next-btn').classList.add('disabled');
    } else if (currentInstruction < instructionItem.length) {
      instructionItem[currentInstruction].classList.add('list-group-item-warning');
    }
  }
  const nextBtn = document.getElementById('next-btn');
  if (currentInstruction == (instructionItem.length - 1)) {
    nextBtn.textContent = 'End';
    document.getElementById('instructionsEnd-alert').classList.toggle('hidden');
  }
});