import { BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './App.css';
import './style/navBar.css';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import MeowReqInfo from './pages/meowReqInfo';
import MeowDbArch from './pages/meowDbArch';

function App() {
    return (
        <Router>
            <header>
                <h1><Link to="/">Alice Barnes</Link></h1>
                <p><em>Web Engineer & Technical Writer</em></p>
                <nav className="main-nav">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                    <NavLink to="/resume">Resume</NavLink>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/portfolio" element={<Portfolio/>} />
                    <Route path="/resume" element={<Resume/>} />
                    <Route path="/portfolio/meowReqInfo" element={<MeowReqInfo/>} />
                    <Route path="/portfolio/meowDbArch" element={<MeowDbArch/>} />
                </Routes>
            </main>

            <footer>
                <p>&copy; 2026 Alice Barnes</p>
                <a href="https://linkedin.com/in/alice-barnes-9a02b7167" target="_blank" rel="noopener noreferrer"><FaLinkedin size={28} /></a>
                <a href="https://github.com/ajbarnes-13" target="_blank" rel="noopener noreferrer"><FaGithub size={28} /></a>
            </footer>
        </Router>
    );
}

export default App;
