import "./App.css";
import UserTable from "./components/UserTable/UserTable";
import Wrapper from "./components/Wrapper/Wrapper";
import Aside from "./layout/Aside/Aside";
import Navbar from "./layout/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-page">
        <Aside />
        <div className="App-box">
          <Wrapper />
          <UserTable />
        </div>
      </div>
    </div>
  );
}

export default App;
