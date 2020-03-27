import React from 'react';
import ilustration from '../images/undraw_selecting_1lx3.svg';
import Form from '../components/contact.form';

export default () => (
  <header className="bg-gray-300">
    <div className="container mx-auto p-12 max-w-4xl">
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <h1 className="font-bold text-purple-700 text-6xl">Hola! Soy Jorge</h1>
          <p className="text-xl font-light">Creo aplicaciones web y trabajo en TR</p>
        </div>
        <img src={ilustration} alt="Hombre seleccionando un elemento de un grid" style={{height: "300px"}}></img>
      </div>
      <div>
        <Form />
      </div>
    </div>
  </header>
);
