import MonthSummary from './sections/MonthSummary/MonthSummary';

// Mês fixo por enquanto: a escolha do mês entra na etapa 7
const MES = '2026-11';

function App() {
  return (
    <main>
      <h1>Custos da casa</h1>
      <MonthSummary mes={MES} />
    </main>
  );
}

export default App;
