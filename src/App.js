import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import Category from './pages/Category';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="container content">
          <Routes>
            <Route exect path="/" element={<Home />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/category/:name" element={<Category />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </main>
      </Router>
      <Footer />
    </>
  );
}

export default App;
