var recipes = {
  prop: 1
}

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, {key: value})
}

updateObjectWithKeyAndValue(recipes, 'prop2', 2);
