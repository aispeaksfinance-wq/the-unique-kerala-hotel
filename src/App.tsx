import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
    return (
        <div className="min-h-screen bg-[var(--color-cream-white)]">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Menu />
                <Gallery />
                <Contact />
            </main>
        </div>
    );
}

export default App;
