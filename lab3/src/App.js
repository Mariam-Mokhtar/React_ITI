import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/home/home'
import Artists from './components/musicSigners/music'
import ArtistDetails from './components/artistDetails/artist-details'

function App() {
  return (
    <div>
    <div className="allComp">
        <BrowserRouter>
             {/* <div className="header">
                 <Header/>
             </div> */}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/music" element={<Artists/>}/>
                <Route path="/artist/:id" element={<ArtistDetails/>}/>
            </Routes>
        </BrowserRouter>
    </div>
</div>
  );
}

export default App;
