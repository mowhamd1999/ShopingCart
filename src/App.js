import "./App.css";
import Header from "./Components/Header/Header";
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="bg-indigo-400 w-full h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
