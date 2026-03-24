//João Victor de Jesus Augusto PD015
//Ligado à Funções e dados do carrinho (remover, atualizar, etc.)
import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    // Container principal do item no carrinho
    <div className="cart-item">
      
      {/* Imagem do produto */}
      <img src={item.image} alt={item.title} />

      {/* Área com o título e o preço do produto */}
      <div style={{ flex: 1 }}>
        <strong>{item.title}</strong>
        <p>R$ {item.price}</p>
      </div>

      {/* Entrada para alterar a quantidade do produto */}
      <input
        type="number"           // Tipo numérico
        min="1"                 // Quantidade mínima exigida = 1
        value={item.quantity}  // Valor atual vindo do estado do carrinho
        onChange={(e) =>
          // Quando mudar, chama a função do contexto para atualizar a quantidade
          updateQuantity(item.id, Number(e.target.value))
        }
        style={{ width: 60 }}   // Largura fixa da entrada
      />

      {/* Botão para remover o item do carrinho */}
      <button
        onClick={() => removeFromCart(item.id)} // Remove pelo ID do produto
        className="btn-danger"                  // Classe de estilo (x vermelho)
      >
        X
      </button>
    </div>
  );
}
