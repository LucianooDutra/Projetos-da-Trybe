export async function getCategories() {
  const fetchCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categoriesJSON = await fetchCategories.json();
  return categoriesJSON;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const fetchCategoryPerQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  const categoryPerQueryJSON = await fetchCategoryPerQuery.json();
  return categoryPerQueryJSON;
}

export async function getProductsFromCategory(categoryId) {
  const fetchCategory = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  const categoryJSON = await fetchCategory.json();
  return categoryJSON;
}

export async function getProductsFromQuery(query) {
  const fetchQuery = await fetch(`https://api.mercadolibre.com/items/${query}`);
  const queryJSON = await fetchQuery.json();
  return queryJSON;
}
