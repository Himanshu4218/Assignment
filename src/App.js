import React from 'react'
import { Container} from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import TeamScreen from './screens/TeamScreen'
import TeamDetail from './screens/TeamDetail'


const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path="/search/:keyword" element={<HomeScreen/>} exact />
            <Route path="/page/:pageNumber" element={<HomeScreen/>} exact />
            <Route
              path="/search/:keyword/page/:pageNumber"
              element={<HomeScreen/>}
              exact
            />
            <Route exact path="/teams/:domain" element={<TeamDetail/>} />
            <Route exact path="/teams" element={<TeamScreen/>} />
            <Route exact path="/" element={<HomeScreen/>} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
};

export default App;