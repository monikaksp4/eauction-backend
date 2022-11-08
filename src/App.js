import { Routes, Route } from "react-router-dom"
import Home from "./Componentns/Home";
import AddProduct from "./Componentns/AddProduct";
import ViewProduct from "./Componentns/ViewProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/add-product" element={ <AddProduct/> } />
        <Route path="/product/:id" element={ <ViewProduct/> } />
      </Routes>
    </div>
  )
}

export default App;