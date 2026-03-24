//João Victor de Jesus Augusto PD015
{/* Barra de busca com o debounce */}
function SearchBar({ value, onChange }) {
  return (
    <input
      className="border p-2 w-full mb-4 rounded"
      placeholder="Buscar produto..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;
