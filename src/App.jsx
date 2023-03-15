import { ItemListContainer } from './components/ItemListContainer';
import { Navbar } from './components/NavBar';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer text={'Catalogo de productos'} />
    </div>
  );
}
