//João Victor de Jesus Augusto PD015
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams(); // pega o id 
  const [product, setProduct] = useState(null); // produto carregado
  const [loading, setLoading] = useState(true); // estado de loading
  const { addToCart } = useCart(); // função para adicionar ao carrinho

  // Busca o produto pelo id quando a página abre
  useEffect(() => {
    getProductById(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  // Enquanto carrega, mostra mensagem de carregamento
  if (loading) {
    return (
      <div className="container fade-in">
        <p>Carregando produto...</p>
      </div>
    );
  }

  // Se não encontrar o produto
  if (!product) {
    return (
      <div className="container fade-in">
        <p>Produto não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="container fade-in">
      <div className="card">
        {/* Imagem do produto */}
        <img src={product.image} alt={product.title} />

        {/* Título */}
        <h2>{product.title}</h2>

        {/* Preço */}
        <p>
          <strong>Preço:</strong> ${product.price}
        </p>

        {/* Descrição */}
        <p>{product.description}</p>

        {/* Botão de ação */}
        <div className="card-actions">
          <button
            className="btn btn-success"
            onClick={() => addToCart(product)}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
