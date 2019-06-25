import React from 'react';
import Header from './components/header/header';
import Form from './components/form/form';
import Response from './components/response/response';
import Footer from './components/footer/footer';

import('./app.scss');

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Form />
          <Response />
        </section>
      </main>
      <Footer />
    </>
  );
}
