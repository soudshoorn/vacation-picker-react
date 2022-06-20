import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { vacationsList } from "./vacationsList";
import New from "./pages/New";

function App() {
  const [currentVacation, changeVacation] = useState(vacationsList[0]);

  function setVacation(vacation) {
    changeVacation(vacation);
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home currentVacation={currentVacation} setVacation={setVacation} />} />
          <Route path="/newvacation" exact element={<New />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
