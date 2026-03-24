//João Victor de Jesus Augusto PD015
import { useState } from "react";

export default function CategoryFilter({ categories, onSelect }) {
  // Guarda aqui qual categoria está selecionada
  const [active, setActive] = useState("");

  function handleClick(cat) {
    setActive(cat);
    onSelect(cat);
  }

  return (
    <div className="category-filter fade-in">
      {/* Botão para mostrar todas as categorias */}
      <button
        className={`btn ${active === "" ? "active btn-primary" : ""}`}
        onClick={() => handleClick("")}
      >
        Todas
      </button>

      {/* Botões das categorias que vieram da API */}
      {categories.map((cat) => (
        <button
          key={cat}
          className={`btn ${active === cat ? "active btn-primary" : ""}`}
          onClick={() => handleClick(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
