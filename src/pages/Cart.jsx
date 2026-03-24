//João Victor de Jesus Augusto PD015
// Para acessar os dados do carrinho
import { useCart } from "../context/CartContext";

// Importa o componente que representa cada item individual do carrinho
import CartItem from "../components/CartItem";

// Componente da página do carrinho
export default function Cart() {
  // Pega do contexto: 
  // - cart: lista de itens no carrinho
  // - total: valor total da compra
  const { cart, total } = useCart();

  return (
    // Container principal da página do carrinho
    // A classe "fade-in" aplica uma animação leve de entrada
    <div className="container fade-in">
      {/* Título da página */}
      <h1>Carrinho</h1>

      {/* 
        Se o carrinho estiver vazio, mostra essa mensagem.
        O "&&" só renderiza o <p> se a condição for verdadeira.
      */}
      {cart.length === 0 && <p>Seu carrinho está vazio.</p>}

      {/* 
        Percorre todos os itens do carrinho e renderiza
        um componente CartItem para cada produto 
      */}
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      {/* 
        Mostra o total da compra.
        toFixed(2) serve para sempre mostrar 2 casas decimais como 80,80.
      */}
      <h2 style={{ marginTop: 16 }}>
        Total: R$ {total.toFixed(2)}
      </h2>
    </div>
  );
}
