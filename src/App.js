import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./pages/home";
import Library from "./pages/library/library";
import History from "./pages/history/history";



function App() {

  return (
    
    <BrowserRouter>
    <div className="App">
      <Header />
      <div style={{ width: '100%', display: 'flex' }}>
        <Menu  />
        <div style={{ width: '100%', padding: '50px 70px', boxSizing: "border-box", display: 'flex', justifyContent: 'center', flexDirection: "column" }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/library' element={<Library />} />
            <Route path='/history' element={<History />} />
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
