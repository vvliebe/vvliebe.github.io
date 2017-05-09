import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from '@/pages/home/index'
import About from '@/pages/about/index'
import Projects from '@/pages/projects/index'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Topics</Link></li>
          </ul>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/projects" component={Projects}></Route>
        </div>
      </Router>
    )
  }
}

export default App
