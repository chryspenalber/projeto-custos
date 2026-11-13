import { useState } from 'react';
import styles from './EntryForm.module.css';

function EntryForm({ categorias }) {
  const [campos, setCampos] = useState({
    tipo: 'custo',
    categoriaId: '',
    valor: '',
    nota: '',
  });

  function handleChange(evento) {
    const { name, value } = evento.target;
    setCampos({ ...campos, [name]: value });
  }

  return (
    <section>
      <h2>Novo lançamento</h2>

      <div className={styles.campos}>
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
            {categorias.map((categoria) => (
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
      </div>
    </section>
  );
}

export default EntryForm;
