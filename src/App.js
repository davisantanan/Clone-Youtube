import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import { MenuStore } from "./contexts/menuContext";
import { DropMenuStore } from "./contexts/dropDownMenuContext";
import { UserStorage } from './contexts/userContext';
import { ContextStore } from "./contexts/categoryContext";
import CreateAccount from "./pages/createAccount";
import SearchPage from "./pages/search";
import { SearchStore } from "./contexts/searchContext";


function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <ContextStore>
          <MenuStore>
            <DropMenuStore>
              <SearchStore>
                <div className="hero-container"> 
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<CreateAccount />} />
                    <Route path="/search" element={<SearchPage />} />
                  </Routes>
                </div>
              </SearchStore>
            </DropMenuStore>
          </MenuStore>
        </ContextStore>
      </UserStorage>
    </BrowserRouter>
  )
}

export default App;
