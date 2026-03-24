//João Victor de Jesus Augusto PD015
// Importa o Link para poder navegar entre páginas sem recarregar o site
import { Link } from "react-router-dom";

// Para poder adicionar produtos
import { useCart } from "../context/CartContext";

// Componente que recebe um produto por props e exibe ele em formato de card
export default function ProductCard({ product }) {
  // Pega a função addToCart do contexto do carrinho
  const { addToCart } = useCart();

  return (
    // Container principal do card do produto
    <div className="card">
      {/* Imagem do produto */}
      <img src={product.image} alt={product.title} />

      {/* Título do produto */}
      <h3>{product.title}</h3>

      {/* Preço do produto */}
      <p>
        <strong>R$ {product.price}</strong>
      </p>

      {/* Área de ações (botões) do card */}
      <div className="card-actions">
        {/* 
          Link para a página de detalhes dos produtos.
          Ao clicar, navega para /product/{id} sem ter que recarregar a página 
        */}
        <Link to={`/product/${product.id}`} className="btn btn-primary">
          Ver detalhes
        </Link>

        {/* 
          Botão para adicionar o produto ao carrinho.
          Ao clicar, chama a função addToCart passando o produto atual 
        */}
        <button
          onClick={() => addToCart(product)}
          className="btn btn-success"
        >
          Comprar
        </button>
      </div>
    </div>
  );
}
