import { QueryClientProvider, QueryClient } from 'react-query'
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const query = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={query}>
      <div className="App">
        <h1>Ghibli studio</h1>
        <Card />
      </div>
    </QueryClientProvider>
  );
}

export default App;
