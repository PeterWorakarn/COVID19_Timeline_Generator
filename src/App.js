import React from 'react';
import Footer from './components/Footer';
import Form from './components/Form/Form';
import Header from './components/Header';
import Timeline from './components/Timeline/Timeline';
import { AppProvider } from './context';


function App() {
  return (
    <AppProvider>
    <div className="container mx-auto max-w-3xl">
      <Header />
      <main className="container flex">
        <Form />
        <Timeline />
      </main>
      <Footer />
    </div>
    </AppProvider>
  );
}

export default App;
