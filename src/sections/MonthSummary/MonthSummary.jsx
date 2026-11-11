import { calculaResumo } from '../../utils/calculaResumo';
import { formataMes } from '../../utils/formataMes';
import SummaryCard from '../../components/SummaryCard/SummaryCard';
import styles from './MonthSummary.module.css';

function MonthSummary({ mes, lancamentos, categorias }) {
  const resumo = calculaResumo(mes, lancamentos, categorias);

  return (
    <section>
      <h2>{formataMes(mes)}</h2>
      <dl className={styles.cards}>
        <SummaryCard rotulo="Despesas" valor={resumo.despesas} />
        <SummaryCard rotulo="Custo p/ cada" valor={resumo.custoPorPessoa} />
        <SummaryCard rotulo="Receitas" valor={resumo.receitas} />
        <SummaryCard rotulo="Sobra" valor={resumo.sobra} />
      </dl>
    </section>
  );
}

export default MonthSummary;
