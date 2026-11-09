import { categorias } from '../../data/categorias';
import { lancamentos } from '../../data/lancamentos';
import { calculaResumo } from '../../utils/calculaResumo';
import SummaryCard from '../../components/SummaryCard/SummaryCard';
import styles from './MonthSummary.module.css';

// Mês fixo por enquanto: a escolha do mês entra na etapa 7
const MES = '2026-11';

function MonthSummary() {
  const resumo = calculaResumo(MES, lancamentos, categorias);

  return (
    <section>
      <h2>{MES}</h2>
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
