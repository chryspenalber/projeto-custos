import { categorias } from '../../data/categorias';
import { lancamentos } from '../../data/lancamentos';
import { montaLancamentos } from '../../utils/montaLancamentos';
import EntryItem from '../../components/EntryItem/EntryItem';
import styles from './EntryList.module.css';

function EntryList({ mes }) {
  const doMes = montaLancamentos(mes, lancamentos, categorias);

  return (
    <section>
      <h2>Lançamentos</h2>
      {doMes.length === 0 ? (
        <p>Nenhum lançamento neste mês.</p>
      ) : (
        <ul className={styles.lista}>
          {doMes.map((lancamento) => (
            <EntryItem
              key={lancamento.id}
              categoria={lancamento.categoria}
              tipo={lancamento.tipo}
              valor={lancamento.valor}
              nota={lancamento.nota}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default EntryList;
