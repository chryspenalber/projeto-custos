import { useState } from 'react';
import { leValorDigitado } from '../../utils/leValorDigitado';
import styles from './EntryForm.module.css';

function tipoDeCategoria(tipo) {
  return tipo === 'receita' ? 'receita' : 'despesa';
}

function EntryForm({ mes, categorias, aoAdicionar }) {
  const [campos, setCampos] = useState({
    tipo: 'custo',
    categoriaId: '',
    valor: '',
    nota: '',
  });

  const [erro, setErro] = useState('');

  function handleChange(evento) {
    const { name, value } = evento.target;

    if (
      name === 'tipo' &&
      tipoDeCategoria(value) !== tipoDeCategoria(campos.tipo)
    ) {
      setCampos({ ...campos, tipo: value, categoriaId: '' });
    } else {
      setCampos({ ...campos, [name]: value });
    }
  }

  function handleSubmit(evento) {
    evento.preventDefault();

    if (campos.categoriaId === '') {
      setErro('Escolha uma categoria.');
      return;
    }

    const valor = leValorDigitado(campos.valor);

    if (Number.isNaN(valor) || valor <= 0) {
      setErro('Digite um valor maior que zero.');
      return;
    }

    setErro('');

    const novoLancamento = {
      id: String(Date.now()),
      mes,
      categoriaId: campos.categoriaId,
      valor: campos.tipo === 'reembolso' ? -valor : valor,
      nota: campos.nota,
    };

    aoAdicionar(novoLancamento);
  }

  const categoriasDoTipo = categorias.filter(
    (categoria) =>
      categoria.tipo === tipoDeCategoria(campos.tipo) && categoria.ativa,
  );

  return (
    <section>
      <h2>Novo lançamento</h2>

      <form className={styles.campos} onSubmit={handleSubmit}>
        <fieldset className={styles.grupo}>
          <legend className={styles.rotulo}>Tipo</legend>
          <div className={styles.opcoes}>
            <div className={styles.opcao}>
              <input
                id="tipo-custo"
                name="tipo"
                type="radio"
                value="custo"
                checked={campos.tipo === 'custo'}
                onChange={handleChange}
              />
              <label htmlFor="tipo-custo">Custo</label>
            </div>

            <div className={styles.opcao}>
              <input
                id="tipo-receita"
                name="tipo"
                type="radio"
                value="receita"
                checked={campos.tipo === 'receita'}
                onChange={handleChange}
              />
              <label htmlFor="tipo-receita">Receita</label>
            </div>

            <div className={styles.opcao}>
              <input
                id="tipo-reembolso"
                name="tipo"
                type="radio"
                value="reembolso"
                checked={campos.tipo === 'reembolso'}
                onChange={handleChange}
              />
              <label htmlFor="tipo-reembolso">Reembolso</label>
            </div>
          </div>
        </fieldset>

        <div className={styles.campo}>
          <label htmlFor="categoriaId" className={styles.rotulo}>
            Categoria
          </label>
          <select
            id="categoriaId"
            name="categoriaId"
            className={styles.controle}
            value={campos.categoriaId}
            onChange={handleChange}
          >
            <option value="">Escolha uma categoria</option>
            {categoriasDoTipo.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.campo}>
          <label htmlFor="valor" className={styles.rotulo}>
            Valor
          </label>
          <input
            id="valor"
            name="valor"
            type="text"
            inputMode="decimal"
            className={styles.controle}
            value={campos.valor}
            onChange={handleChange}
          />
        </div>

        <div className={styles.campo}>
          <label htmlFor="nota" className={styles.rotulo}>
            Nota (opcional)
          </label>
          <input
            id="nota"
            name="nota"
            type="text"
            className={styles.controle}
            value={campos.nota}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.botao}>
          Adicionar
        </button>
        {erro && (
          <p className={styles.erro} role="alert">
            {erro}
          </p>
        )}
      </form>
    </section>
  );
}

export default EntryForm;
