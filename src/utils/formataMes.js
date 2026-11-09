const formatador = new Intl.DateTimeFormat('pt-BR', {
  month: 'long',
  year: 'numeric',
});

export function formataMes(mes) {
  const [ano, numeroMes] = mes.split('-');
  // No Date, janeiro é 0, então o número do mês precisa diminuir 1
  const data = new Date(Number(ano), Number(numeroMes) - 1);
  return formatador.format(data);
}
