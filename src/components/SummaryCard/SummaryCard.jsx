import { formataValor } from '../../utils/formataValor';
import styles from './SummaryCard.module.css';

// Um número do resumo: o nome em cima e o valor embaixo
function SummaryCard({ rotulo, valor }) {
  return (
    <div className={styles.card}>
      <dt className={styles.rotulo}>{rotulo}</dt>
      <dd className={styles.valor}>{formataValor(valor)}</dd>
    </div>
  );
}

export default SummaryCard;
