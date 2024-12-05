// Retrieve recipes from localStorage
const recipes = JSON.parse(localStorage.getItem('filteredRecipes'));
const recipesList = document.getElementById('recipes-list');

if (!recipes || recipes.length === 0) {
  recipesList.innerHTML = '<p>No recipes found. Try other ingredients!</p>';
} else {
  recipes.forEach(recipe => {
    const recipeElement = document.createElement('div');
    recipeElement.classList.add('recipe');

    recipeElement.innerHTML = `
      <h3>${recipe.title}</h3>
      <p>Ingredients: ${recipe.ingredients.join(', ')}</p>
    `;

    const recipeImage = document.createElement('img');
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.title;
    recipeImage.addEventListener('click', () => displayVarieties(recipe.id));

    recipeElement.appendChild(recipeImage);
    recipesList.appendChild(recipeElement);
  });
}

function displayVarieties(recipeId) {
  const varietiesList = document.getElementById('varieties-list');
  varietiesList.innerHTML = '';

  const selectedRecipe = recipes.find(recipe => recipe.id === recipeId);

  if (!selectedRecipe) {
    varietiesList.innerHTML = '<p>No varieties found.</p>';
    return;
  }

  selectedRecipe.variants.forEach(variant => {
    const varietyElement = document.createElement('div');
    varietyElement.classList.add('variety');

    varietyElement.innerHTML = `
      <h3>${variant.title}</h3>
    `;

    const variantImage = document.createElement('img');
    variantImage.src = variant.image;
    variantImage.alt = variant.title;

    varietyElement.appendChild(variantImage);
    varietiesList.appendChild(varietyElement);
  });
}
