import logo from './logo.svg';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar';
function App() {
  const title = "Hello React from Nea";
  const likes = 100;
  const person = { name: "Nea", gender: "Male" }
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <Home /> */}
        <ProductPage />
      </div>
    </div>
  );
}

export default App;
