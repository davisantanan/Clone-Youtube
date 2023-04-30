import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./pages/home";
import { MenuStore } from "./contexts/menuContext";
import Login from "./pages/login";
import { DropMenuStore } from "./contexts/dropDownMenuContext";
import CreateAccount from "./pages/createAccount";


function App() {

  return (
    <MenuStore>
      <DropMenuStore>
        <BrowserRouter>
        <div className="App">
          <Header />
          <div className="hero-container">
            <Menu />
            <div className="content-container">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/sign-up' element={<CreateAccount />} />
              </Routes>
            </div>
          </div>
        </div>
        </BrowserRouter>
      </DropMenuStore>
    </MenuStore>
  )
}

export default App;
