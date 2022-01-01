import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import Recipe from './components/Recipe';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="container content">
          <Routes>
            <Route exect path="/" element={<Home />} />
            <Route path="/category/:name" element={<Category />}></Route>
            <Route path="/recipe/:id" element={<Recipe />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </main>
      </Router>
      <Footer />
    </>
  );
}

export default App;
