import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { MenuStore } from "./contexts/menuContext";
import Login from "./pages/login";
import { DropMenuStore } from "./contexts/dropDownMenuContext";
import { UserStorage } from './contexts/userContext';
import CreateAccount from "./pages/createAccount";


function App() {

  return (
    <BrowserRouter>
      <UserStorage>
        <MenuStore>
          <DropMenuStore>
            <div className="App">
              <div className="hero-container">
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/sign-up' element={<CreateAccount />} />
                  </Routes>
              </div>
            </div>
          </DropMenuStore>
        </MenuStore>
      </UserStorage>
    </BrowserRouter>
  )
}

export default App;
