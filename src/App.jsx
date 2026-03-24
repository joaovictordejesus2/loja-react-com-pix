//João Victor de Jesus Augusto PD015

// Importa os componentes do React Router 
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importa o Provider do contexto do carrinho
import { CartProvider } from "./context/CartContext";

// Importa as páginas principais
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

// Importa a página de pagamento PIX
import PixPayment from "./pages/PixPayment";

// Importa o cabeçalho
import Header from "./components/Header";

// Componente principal
function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        {/* Header aparece em todas as páginas */}
        <Header />

        {/* Sistema de rotas */}
        <Routes>

          {/* Página inicial */}
          <Route path="/" element={<Home />} />

          {/* Página de detalhes do produto */}
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* Página do carrinho */}
          <Route path="/cart" element={<Cart />} />

          {/* ✅ ROTA DO PIX (AGORA CORRETA) */}
          <Route path="/pix" element={<PixPayment />} />

        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

// Exportação
export default App;