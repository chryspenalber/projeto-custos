import { useState } from 'react';
import { lancamentos as lancamentosIniciais } from './data/lancamentos';
import { categorias } from './data/categorias';
import MonthSummary from './sections/MonthSummary/MonthSummary';
import EntryList from './sections/EntryList/EntryList';

// Mês fixo inicialmente
const MES = '2026-11';

function App() {
  const [lancamentos] = useState(lancamentosIniciais);

  return (
    <main>
      <h1>Custos da casa</h1>
      <MonthSummary
        mes={MES}
        lancamentos={lancamentos}
        categorias={categorias}
      />
      <EntryList mes={MES} lancamentos={lancamentos} categorias={categorias} />
    </main>
  );
}

export default App;
