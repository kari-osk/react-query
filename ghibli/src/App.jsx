import { QueryClientProvider, QueryClient } from 'react-query'
import CardApi from './components/CardApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const query = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={query}>
      <div className="App">
        <h1>Ghibli studio</h1>
        <CardApi />
      </div>
    </QueryClientProvider>
  );
}

export default App;
