// Criado uma vez só: as regras de formatação não mudam entre as chamadas
const formatador = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

// Recebe cêntimos (15840) e devolve o texto da tela ('158,40€')
export function formataValor(centimos) {
    const euros = centimos / 100;
    return `${formatador.format(euros)}€`;
}

