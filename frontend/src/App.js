import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
const Contact = React.lazy(() => import('./pages/Contact'));
const Auth = React.lazy(() => import('./pages/Auth'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Container>
      <Router>
        <Route path='/' exact component={Auth} />
        <Route path='/contact' exact component={Contact} />
      </Router>
    </Container>
    </Suspense>
  );
}

export default App;
