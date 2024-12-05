// Sample recipes data
const recipesData = [
  {
    title: "Normal Chicken Curry",
    ingredients: ["chicken", "curry", "onions"],
    image: "chicken curry.jpg",
    id: 1,
    variants: [
      { title: "Spicy Chicken Curry", image: "Spicy Chicken Curry.jpg" },
      { title: "Mild Chicken Curry", image: "mild chicken curry.jpg" },
      { title: "chicken thandhoori curry",image: "chicken thandhoori curry.jpg" },
      { title: "Spicy Chicken Biryani", image: "spicy_chicken_biryani.jpg" },
      { title: "Dum Chicken Biryani", image: "dum_chicken_biryani.jpg" },
      { title: "Traditional Chicken Shawarma", image: "traditional chicken shawarma.jpg" }
    ]
  },
  {
    title: "Vegetable Stir Fry",
    ingredients: ["vegetables", "soy sauce", "ginger"],
    image: "Vegetable Stir Fry.jpg",
    id: 2,
    variants: [
      { title: "Garlic Stir Fry", image: "garlic veg stir fry.jpg" },
      { title: "Spicy Stir Fry", image: "spicy veg stir fry.jpg" },
      { title: "Cashew Stir Fry", image: "cashew veg stir fry.jpg" },
      { title: "Sweet and Sour Stir Fry", image: "sweet sour stir fry.jpg" }
    ]
  },
  {
    title: "Tomato Pasta",
    ingredients: ["tomato", "pasta", "basil"],
    image: "tomato pasta.jpg",
    id: 3,
    variants: [
      { title: "Pasta with Cheese", image: "pasta_with_cheese.jpg" },
      { title: "Spicy Tomato Pasta", image: "spicy_tomato_pasta.jpg" },
      { title: "Creamy Tomato Pasta", image: "creamy_tomato_pasta.jpg" },
      { title: "Tomato Pasta with Vegetables", image: "vegetable_tomato_pasta.jpg" }
    ]
  },
  {
      title: "Grilled Salmon",
      ingredients: ["salmon", "lemon", "garlic"],
      image: "grilled_salmon.jpg",
      id: 4,
      variants: [
        { title: "Spicy Grilled Salmon", image: "spicy_grilled_salmon.jpg" },
        { title: "Garlic Herb Salmon", image: "garlic_herb_salmon.jpg" },
        { title: "Honey Glazed Salmon", image: "honey_glazed_salmon.jpg" }
      ]
    },
    {
      title: "Egg",
      ingredients: ["egg", "pepper", "salt"],
      image: "egg.jpg",
      id: 5,
      variants: [
        { title: "Egg curry", image: "Egg_curry.jpg" },
        { title: "Egg Fried rice", image: "Egg_fried_rice.jpg" },
        { title: "Egg kuzhambu", image: "Egg_kuzhambu.jpg" },
        { title: "Boiled egg fry", image: "Boiled egg fry.jpg" },
      ]
    },
    {
      title: "Vegetable Soup",
      ingredients: ["carrot", "celery", "potato"],
      image: "vegetable_soup.jpg",
      id: 6,
      variants: [
        { title: "Creamy Vegetable Soup", image: "creamy_vegetable_soup.jpg" },
        { title: "Spicy Lentil Soup", image: "spicy_lentil_soup.jpg" },
        { title: "Tomato Basil Soup", image: "tomato_basil_soup.jpg" }
      ]
    },
    {
      title: "Pancakes",
      ingredients: ["flour", "milk", "sugar"],
      image: "pancakes.jpg",
      id: 7,
      variants: [
        { title: "Blueberry Pancakes", image: "blueberry_pancakes.jpg" },
        { title: "Banana Pancakes", image: "banana_pancakes.jpg" },
        { title: "Chocolate Chip Pancakes", image: "chocolate_chip_pancakes.jpg" }
      ]
    },
    {
      title: "Pizza",
      ingredients: ["flours", "tomato sauce", "cheese", "olive oil"],
      image: "pizza.jpg",
      id: 8,
      variants: [
        { title: "Margherita Pizza", image: "margherita_pizza.jpg" },
        { title: "Pepperoni Pizza", image: "pepperoni_pizza.jpg" },
        { title: "BBQ Chicken Pizza", image: "bbq_chicken_pizza.jpg" },
        { title: "Veggie Delight Pizza", image: "veggie_pizza.jpg" }
      ]
    },
    {
      title: "Tomato Kuruma",
      ingredients: ["tomato with curryleaves", "oil", "masala",],
      image: "tomatokuruma.jpg",
      id: 9,
      variants: [
        { title: "South indian tomato kuruma", image: "south_indian_tomatokuruma.jpg" },
        { title: "Chettinadu tomato kuruma", image: "Chettinadu_tomato_kuruma.jpg" },
      ]
    },
    {
      title: "Prawn ",
      ingredients: ["prawns", "butter", "parsley"],
      image: "prawn.jpg",
      id: 10,
      variants: [
        { title: "Garlic Butter Prawn", image: "garlic butter prawn.jpg" },
        { title: "Lemon Herb Prawn", image: "lemon herb prawn.jpg" },
        { title: "Spicy Prawn", image: "spicy prawn.jpg" }
      ]
    }, 
  ];
// Function to filter recipes based on ingredients entered by the user
function searchRecipes(ingredients) {
  const ingredientsList = ingredients.toLowerCase().split(',').map(item => item.trim());

  const filteredRecipes = recipesData.filter(recipe =>
    recipe.ingredients.some(ingredient => ingredientsList.includes(ingredient.toLowerCase()))
  );

  return filteredRecipes;
}

// Handle form submission
document.getElementById('ingredients-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const ingredients = document.getElementById('ingredients').value;
  const recipes = searchRecipes(ingredients);

  if (recipes.length === 0) {
    alert('No recipes found. Try other ingredients!');
    return;
  }

  // Store recipes in localStorage and navigate to recipes.html
  localStorage.setItem('filteredRecipes', JSON.stringify(recipes));
  window.location.href = 'recipes.html'; // Ensure file name matches the actual file
});
