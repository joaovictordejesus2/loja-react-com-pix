// João Victor de Jesus Augusto PD015

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  // ✅ Hook deve ficar DENTRO do componente
  const navigate = useNavigate();

  // Estado para controlar o tema
  const [dark, setDark] = useState(false);

  // Efeito para aplicar/remover classe dark
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      {/* Banner com animação */}
      <div className="top-banner fade-in">
        <img src="/src/assets/loja-react.png" alt="Banner da loja" />
      </div>

      <header>
        <div className="container">
          <h1>Loja Desenvolve</h1>

          {/* Navegação */}
          <nav style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            
            {/* Botão Home */}
            <Link to="/" className="btn btn-primary">
              🏠 Home
            </Link>

            {/* Botão Carrinho */}
            <Link to="/cart" className="btn btn-primary">
              🛒 Carrinho
            </Link>

            {/* Botão Dark Mode */}
            <button
              className="btn btn-primary"
              onClick={() => setDark(!dark)}
            >
              {dark ? "☀️ Light Mode" : "🌕 Dark Mode"}
            </button>

            {/* Botão PIX */}
            <button
              className="btn btn-success"
              onClick={() => navigate("/pix")}
            >
              💳 PIX
            </button>

          </nav>
        </div>
      </header>
    </>
  );
}