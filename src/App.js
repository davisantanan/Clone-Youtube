import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuStore } from "./contexts/menuContext";
import { DropMenuStore } from "./contexts/dropDownMenuContext";
import { UserStorage } from './contexts/userContext';
import { CategoryStore } from "./contexts/categoryContext";
import { SearchStore } from "./contexts/searchContext";
import CreateAccount from "./pages/createAccount";
import Home from "./pages/home";
import Login from "./pages/login";
import SearchPage from "./pages/search";
import UserVideos from "./pages/userVideos";


function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <CategoryStore>
          <MenuStore>
            <DropMenuStore>
              <SearchStore>
                <div className="hero-container"> 
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<CreateAccount />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/user-videos" element={<UserVideos />} />
                  </Routes>
                </div>
              </SearchStore>
            </DropMenuStore>
          </MenuStore>
        </CategoryStore>
      </UserStorage>
    </BrowserRouter>
  )
}

export default App;
