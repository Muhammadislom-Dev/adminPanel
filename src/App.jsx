import { Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";
import UserTable from "./components/UserTable/UserTable";
import Wrapper from "./components/Wrapper/Wrapper";
import Aside from "./layout/Aside/Aside";
import Navbar from "./layout/Navbar/Navbar";
import Analitica from "./Page/Analitica/Analitica";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-page">
        <Aside />
        <div className="App-box">
          <Wrapper />
          <Routes>
            <Route path="/" element={<UserTable />} />
            <Route path="/analitica" element={<Analitica />} />
            <Route path="/product" element={<Product />} />
            <Route path="/category" element={<Category />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
