export function leValorDigitado(texto) {
  // O € e os espaços não contam: só importam os dígitos e os separadores
  const limpo = texto.replace(/[€\s]/g, '');
  const ultimoPonto = limpo.lastIndexOf('.');
  const ultimaVirgula = limpo.lastIndexOf(',');
  const posicaoSeparador = Math.max(ultimoPonto, ultimaVirgula);
  const digitosDepois = limpo.length - posicaoSeparador - 1;

  let inteira;
  let decimal;

  if (posicaoSeparador !== -1 && digitosDepois <= 2) {
    inteira = limpo.slice(0, posicaoSeparador);
    decimal = limpo.slice(posicaoSeparador + 1);
  } else {
    inteira = limpo;
    decimal = '';
  }

  const inteiraSoDigitos = inteira.replace(/[.,]/g, '');
  const decimalComDoisDigitos = decimal.padEnd(2, '0');

  return Number(inteiraSoDigitos) * 100 + Number(decimalComDoisDigitos);
}
