//João Victor de Jesus Augusto PD015
// Arquivo responsável por centralizar chamadas à Fake Store API

const BASE_URL = "https://fakestoreapi.com";

// Busca todos os produtos
export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
}

// Busca produto por ID
export async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
}

// Busca categorias
export async function getCategories() {
  const res = await fetch(`${BASE_URL}/products/categories`);
  return res.json();
}

// Busca produtos por categoria
export async function getProductsByCategory(category) {
  const res = await fetch(`${BASE_URL}/products/category/${category}`);
  return res.json();
}

