import React from 'react';
import Footer from './components/Footer';
import Form from './components/Form/Form';
import Header from './components/Header';
import Timeline from './components/Timeline/Timeline';
import { AppProvider } from './context';


function App() {
  return (
    <AppProvider>
      <div className="min-w-full min-h-full bg-test bg-center bg-no-repeat bg-cover">
        <div className="container sm:mx-auto max-w-5xl font-fontMain pt-24">
          <Header />
            <main className="container mx-auto flex flex-col md:flex-row">
              <Form />
              <Timeline />
            </main>
          <Footer />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
