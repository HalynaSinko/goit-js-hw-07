const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const makeIngredients = ingredients => {
    return ingredients.map(ingredient => {
        const item = document.createElement('li');
        item.textContent = ingredient;
        return item;
    })
};
const newIngredients = makeIngredients(ingredients);
const listIngredientsEl = document.querySelector('#ingredients');

listIngredientsEl.append(...newIngredients);
