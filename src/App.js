import './App.css';
// import MinhaLista from './components/MinhaLista';
import NewAdvice from './components/NewAdvice';

function App() {
  return (
    <div className="App">
      <h1>Renderizando Lista</h1>
      {/* <MinhaLista itens={itens} /> */}
      <NewAdvice/>
    </div>
  );
}

export default App;