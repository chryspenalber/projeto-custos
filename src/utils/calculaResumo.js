export function calculaResumo(mes, lancamentos, categorias) {
  const doMes = lancamentos.filter((lancamento) => lancamento.mes === mes);

  let despesas = 0;
  let receitas = 0;

  for (const lancamento of doMes) {
    const categoria = categorias.find(
      (categoria) => categoria.id === lancamento.categoriaId,
    );

    if (categoria.tipo === 'receita') {
      receitas += lancamento.valor;
    } else {
      despesas += lancamento.valor;
    }
  }

  return {
    despesas,
    custoPorPessoa: Math.round(despesas / 2),
    receitas,
    sobra: receitas - despesas,
  };
}
