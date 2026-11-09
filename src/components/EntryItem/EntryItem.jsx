import { formataValor } from '../../utils/formataValor';
import styles from './EntryItem.module.css';

function EntryItem({ categoria, tipo, valor, nota }) {
  return (
    <li className={styles.item}>
      <div>
        <p className={styles.categoria}>{categoria}</p>
        <span className={styles.tipo}>{tipo}</span>
        {nota && <p className={styles.nota}>{nota}</p>}
      </div>
      <span className={styles.valor}>{formataValor(valor)}</span>
    </li>
  );
}

export default EntryItem;
