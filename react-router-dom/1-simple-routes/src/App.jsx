import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Tutorial from "./routes/Tutorial";
import Documentation from "./routes/Documentation";
import NotFound from "./routes/NotFound";
import "./App.css";
import TutorialDetail from "./routes/TutorialDetail";

const App = () => {
  return (
    <>
      {/* 2. Membuat navigasi antar page */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tutorial">Tutorial</Link>
        <Link to="/docs">Docs</Link>
      </nav>
      {/* 3. Define path dan element yang akan dirender */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tutorial">
          <Route index element={<Tutorial/>} />
          <Route path=":items" element={<TutorialDetail />} />
        </Route>
        <Route path="docs" element={<Documentation />} />
        {/* 4. Jangan lupa untuk menambahkan no match route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
