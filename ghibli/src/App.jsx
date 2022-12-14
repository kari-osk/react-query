import { QueryClientProvider, QueryClient } from 'react-query'
import Gallery from './components/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const query = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={query}>
      <div className="App">
        <Navbar />
        <Hero />
        <Gallery />
      </div>
    </QueryClientProvider>
  );
}

export default App;
