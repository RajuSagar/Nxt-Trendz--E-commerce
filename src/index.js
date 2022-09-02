// import React from 'react'
// import ReactDOM from 'react-dom'
// import {BrowserRouter} from 'react-router-dom'

// import App from './App'

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root'),
// )

import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
