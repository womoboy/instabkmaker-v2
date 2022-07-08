import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Media from "./pages/Media";
import Design from "./pages/Design";
import Setting from "./pages/Setting";
import NoPage from "./pages/NoPage";
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [toggleState, setToggleState] = useState(false);

  useEffect(() => {
    console.log(`toggle clicked! ${toggleState}`)
  }, [toggleState]);

  const handleToggle = ()=> {
    setToggleState(!toggleState);
  }

  return (
    <div className="App">
      <Header handleToggle={handleToggle} toggleState={ toggleState } />
      <Sidebar toggleState={ toggleState } />
      <main className={`${toggleState ? 'toggle-space' : null}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/media" element={<Media />} />
          <Route path="/design" element={<Design />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
