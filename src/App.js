import React from 'react';
import Footer from './components/Footer';
import Form from './components/Form/Form';
import Header from './components/Header';
import Timeline from './components/Timeline/Timeline';
import { AppProvider } from './context';
import { Transition } from '@headlessui/react';


function App() {
  return (
    <AppProvider>
      <div className="min-w-full min-h-full bg-brand-background">
        <div className="md:container mx-auto max-w-sm md:max-w-3xl font-fontMain pt-24">
          <Transition appear={true} show={true} enter="transition-opacity duration-2500" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Header />
            <main className="container mx-auto flex flex-col md:flex-row">
              <Form />
              <Timeline />
            </main>
          <Footer />
          </Transition>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
