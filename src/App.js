import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import NavBar from './components/NabBar/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DragAndDrop from './components/DragAndDrop/DragAndDrop';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
            <Route path="DragAndDrop" element={<DragAndDrop />} />
            <Route path="/" element={<Body />} />
            <Route path="Posts" element={<Posts />} />
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
