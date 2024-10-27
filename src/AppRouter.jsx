import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigator from './composants/navigator';
import HomeComponent from './composants/HomeComponent';
import './App.css';
import AboutComponenet from './composants/AboutComponenet';
import ContactComponenet from './composants/ContactComponenet';

function App() {
    return (
        <Router>
            <div>
                <Navigator />
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/about" element={<AboutComponenet />} />
                    <Route path="/contact" element={<ContactComponenet />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
