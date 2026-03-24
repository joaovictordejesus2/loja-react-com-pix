//João Victor de Jesus Augusto PD015
import { useEffect, useState } from "react";
import {
  getCategories,
  getProducts,
  getProductsByCategory,
} from "../services/api";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";

export default function Home() {
  // Lista de todos os produtos carregados da API
  const [products, setProducts] = useState([]);

  // Lista das categorias vindas da API
  const [categories, setCategories] = useState([]);

  // Texto digitado no campo de busca
  const [search, setSearch] = useState("");

  // Texto da busca com debounce (atraso para evitar muitas buscas seguidas)
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Página atual da paginação
  const [page, setPage] = useState(1);

  // Quantidade de produtos mostrados por página
  const itemsPerPage = 8;

  // Executa quando a página abre: carrega produtos e categorias da API
  useEffect(() => {
    getProducts().then(setProducts);
    getCategories().then(setCategories);
  }, []);

  // Efeito de debounce: só atualiza o texto de busca depois de 400ms sem digitar
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      // Sempre que a busca muda, volta para a página 1
      setPage(1);
    }, 400);

    // Se o usuário continuar digitando, cancela o timer anterior
    return () => clearTimeout(timer);
  }, [search]);

  // Função chamada quando o usuário clica em uma categoria
  function handleCategory(cat) {
    // Sempre volta para a página 1 ao trocar a categoria
    setPage(1);

    if (!cat) {
      // Se não houver categoria selecionada, busca todos os produtos
      getProducts().then(setProducts);
    } else {
      // Se houver categoria, busca apenas os produtos daquela categoria
      getProductsByCategory(cat).then(setProducts);
    }
  }

  // Filtra os produtos pelo texto da busca (usando o valor com debounce)
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  // Calcula quantas páginas existem no total
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  // Calcula o índice inicial dos produtos da página atual
  const startIndex = (page - 1) * itemsPerPage;

  // Calcula o índice final dos produtos da página atual
  const endIndex = startIndex + itemsPerPage;

  // Pega apenas os produtos que devem aparecer na página atual
  const paginatedProducts = filtered.slice(startIndex, endIndex);

  return (
    <div className="container fade-in">
      {/* Campo de busca de produtos */}
      <div className="search-box">
        <input
          className="search-input"
          placeholder="Buscar produto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Componente de filtro por categorias */}
      <CategoryFilter categories={categories} onSelect={handleCategory} />

      {/* Grid de produtos (somente os da página atual) */}
      <div className="grid">
        {paginatedProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* Componente de paginação (só aparece se tiver mais de 1 página) */}
      {totalPages > 1 && (
        <Pagination
          page={page}                 // Página atual
          totalPages={totalPages}     // Total de páginas
          onPageChange={setPage}      // Função para mudar de página
        />
      )}
    </div>
  );
}
