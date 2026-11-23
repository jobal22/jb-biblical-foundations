import React from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import ScrollToTop from './helper/ScrollToTop';
import Header from './Components/Header';
import Footer from './Components/Footer';
// import HomePage from './Components/HomePage';
import RootRoutes from './RootRoutes';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <div className='grid-container'>
        <Header />
        <main>
          <RootRoutes/>
        </main>
        {/* <HomePage /> */}
        <Footer />
      </div>
    </Router>
  )
}

export default App