import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* // TODO: Add routes for todos and profile */}
        {/* // TODO: Routes must be "/todos" and "/profile" */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
