import './App.css'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from './componets/layout/Navbar';
import Footer from './componets/layout/Footer';
import Alert from './componets/layout/Alert';
import User from './pages/User';
import {GithubProvider} from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext';


function App() {
  return (
    <GithubProvider>
      <AlertProvider>
    <Router>
      <div>
        <Navbar />
          <main>
            <Alert /> 
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/user/:login' element={<User />}/>
              <Route path='/notfound' element={<NotFound />}/>
              <Route path='/*' element={<NotFound />}/>
            </Routes>
          </main>
        <Footer />
      </div>
    </Router>
    </AlertProvider>
    </GithubProvider>
  )
}

export default App;
