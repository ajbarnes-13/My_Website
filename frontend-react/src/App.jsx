import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-cons/fa';
import './App.css';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';

function App() {
    return (
        <Router>
            <header>
                <h1><Link to="/">Alice Barnes</Link></h1>
            </header>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/resume">Resume</Link>
            </nav>

            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/portfolio" element={<Portfolio/>} />
                    <Route path="/resume" element={<Resume/>} />
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
