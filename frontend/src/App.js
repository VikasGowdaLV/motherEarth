import { Container } from 'react-bootstrap'
import React, { Component }  from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Product from './components/Product';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div>
      <Header />
        <main className='py-3'>
          <Container>
            <h1>FlopCart</h1>
            <HomeScreen/>
          </Container>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
