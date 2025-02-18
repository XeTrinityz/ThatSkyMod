import { useState } from 'react'
import ModShowcase from './pages/ModShowcase'
import FAQPage from './pages/FAQ'
import HamburgerMenu from './components/HamburgerMenu'
import './index.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router basename="/ThatSkyMod">
      <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Routes>
        <Route path="/" element={<ModShowcase />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </Router>
  )
}

export default App