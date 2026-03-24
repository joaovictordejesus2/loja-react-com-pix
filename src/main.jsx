//João Victor de Jesus Augusto PD015
// Importa a biblioteca React para poder usar JSX e componentes)
import React from "react";

// Importa o ReactDOM para rodar o React no navegador
import ReactDOM from "react-dom/client";

// Importa o componente principal 
import App from "./App";

// Importa o arquivo de estilos global 
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext"; 
// Cria a "raiz" da aplicação React dentro do elemento HTML com id="root"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider> {/* 👈 AQUI */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);