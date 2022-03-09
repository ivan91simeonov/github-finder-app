import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from './componets/layout/Navbar';
import Footer from './componets/layout/Footer';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <main>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/notfound' element={<NotFound />}/>
              <Route path='/*' element={<NotFound />}/>
            </Routes>
          </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
