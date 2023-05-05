import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import { MenuStore } from "./contexts/menuContext";
import { DropMenuStore } from "./contexts/dropDownMenuContext";
import { UserStorage } from './contexts/userContext';
import { ContextStore } from "./contexts/categoryContext";
import CreateAccount from "./pages/createAccount";


function App() {

  return (
    <BrowserRouter>
      <UserStorage>
        <ContextStore>
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
        </ContextStore>
      </UserStorage>
    </BrowserRouter>
  )
}

export default App;
