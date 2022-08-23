import { QueryClientProvider, QueryClient } from 'react-query'
import Gallery from './components/Gallery';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';

const query = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={query}>
      <div className="App">
        <Navbar />
        <Gallery />
      </div>
    </QueryClientProvider>
  );
}

export default App;
