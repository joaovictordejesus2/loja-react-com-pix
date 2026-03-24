//João Victor de Jesus Augusto PD015
import { createContext, useContext, useEffect, useState } from "react";

// Cria tema (dark / light)
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Estado que controla se o tema é escuro (true) ou claro (false)
  // Ele já começa lendo o valor salvo no Armazenamento Local
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // useEffect que roda sempre que o valor de "dark" muda
  useEffect(() => {
    if (dark) {
      // Se estiver em modo escuro, adiciona a classe "dark" no <html>
      // Isso permite que o CSS aplique os estilos do dark mode
      document.documentElement.classList.add("dark");

      // Salva a preferência do usuário no Armazenamento Local
      localStorage.setItem("theme", "dark");
    } else {
      // Se estiver em modo claro, remove a classe "dark" do <html>
      document.documentElement.classList.remove("dark");

      // Salva a preferência do usuário no Armazenamento Local
      localStorage.setItem("theme", "light");
    }
  }, [dark]); // Esse efeito depende do valor de "dark"

  return (
    // O Provider disponibiliza "dark" e "setDark" para tudo
    <ThemeContext.Provider value={{ dark, setDark }}>
      {/* Renderiza todos os componentes filhos normalmente */}
      {children}
    </ThemeContext.Provider>
  );
}

// Hook customizado para facilitar o uso do tema em qualquer componente
// Basta chamar useTheme() ao invés de useContext(ThemeContext)
export function useTheme() {
  return useContext(ThemeContext);
}
