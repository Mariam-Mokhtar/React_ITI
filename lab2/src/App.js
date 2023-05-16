
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Error from "./components/error/error";
import Home from "./components/home/home-page/home";
import Profile from "./components/profile/profile";
import Details from "./components/details/details";
function App(){

  return (
      <div>
          <div className="allComp">
              <BrowserRouter>
                   <div className="header">
                       <Header/>
                   </div>
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/profile" element={<Profile/>}/>
                      <Route path="/details/:id" element={<Details/>}/>
                      <Route path="*" element={<Error/>}/>
                  </Routes>
              </BrowserRouter>
          </div>
      </div>
  )
}

export default App;