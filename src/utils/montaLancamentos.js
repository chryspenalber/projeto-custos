export function montaLancamentos(mes, lancamentos, categorias) {
  const doMes = lancamentos.filter((lancamento) => lancamento.mes === mes);

  return doMes.map((lancamento) => {
    const categoria = categorias.find(
      (categoria) => categoria.id === lancamento.categoriaId,
    );

    // O tipo não é guardado: sai da categoria e do sinal do valor
    let tipo;
    if (categoria.tipo === 'receita') {
      tipo = 'Receita';
    } else if (lancamento.valor >= 0) {
      tipo = 'Custo';
    } else {
      tipo = 'Reembolso';
    }

    return {
      id: lancamento.id,
      categoria: categoria.nome,
      tipo,
      valor: lancamento.valor,
      nota: lancamento.nota,
    };
  });
}
