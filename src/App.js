import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";

function App() {
  const [currentVacation, changeVacation] = useState();

  function setVacation(vacation) {
    changeVacation(vacation);
  }

  function updateLike(vacation, update) {
    let newVacation = JSON.parse(JSON.stringify(vacation));
    if(update === 0) {
      newVacation.likes--;
    } else if (update === 1) {
      newVacation.likes++;
    }
    setVacation(newVacation);
}
    


  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home currentVacation={currentVacation} setVacation={setVacation} updateLike={updateLike} />} />
          <Route path="/newvacation" exact element={<New />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
