import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Game from "./pages/Game/Game";
import Statistics from './pages/Statistics/Statistics'
import './index.css'
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/stats" element={<Statistics />} />
      </Routes>
    </Router>
  );
};

export default App;

// import { Routes } from "react-router-dom";
// import { Menu } from "@mui/material";
// import Header from "./components/Header/Header";
// import Game from "./pages/Game/Game";
// const App = () => {
//   return (
//     <>
//     <Header/>
//     <Menu/>
//     <Game/>
//     </>
//   );
// }

// export default App;
