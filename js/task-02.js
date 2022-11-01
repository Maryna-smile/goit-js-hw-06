const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newArray = ingredients.map(el => {
  const li = document.createElement('li');
  li.textContent = el;
  li.classList.add('item');
  return li;
}
  );

  const list = document.querySelector('#ingredients');
  list.append(...newArray);
  console.log(list);


