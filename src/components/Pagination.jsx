//João Victor de Jesus Augusto PD015
// Responsável pela paginação
// Recebe:
// - page: página atual
// - totalPages: total de páginas disponíveis
// - onPageChange: função para mudar a página
function Pagination({ page, totalPages, onPageChange }) {
  return (
    // Container dos botões de paginação
    // A classe "pagination" centraliza os itens e aplica espaçamento e margem
    <div className="pagination">

      {/* Botão para voltar uma página */}
      <button
        className="btn btn-primary"
        // Desabilita o botão se já estiver na primeira página
        disabled={page === 1}
        // Ao clicar, chama a função passando a página anterior
        onClick={() => onPageChange(page - 1)}
      >
        ⇦
      </button>

      {/* Mostra a página atual e o total de páginas */}
      <span className="pagination-info">
        {page} / {totalPages}
      </span>

      {/* Botão para avançar uma página */}
      <button
        className="btn btn-primary"
        // Desabilita o botão se já estiver na última página
        disabled={page === totalPages}
        // Ao clicar, chama a função passando a próxima página
        onClick={() => onPageChange(page + 1)}
      >
        ⇨
      </button>
    </div>
  );
}

// Exporta o componente para poder ser usado em outras partes do app
export default Pagination;
