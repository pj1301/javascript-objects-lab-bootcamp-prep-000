var recipes = {
  prop: 1
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {key: value})
}

updateObjectWithKeyAndValue(recipes, 'prop2', 2);
