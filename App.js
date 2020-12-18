import React from 'react';
import {StatusBar} from 'react-native'

import Routes from './src/routes'

export default function App() {
  return (
    
    <>
    {/*DEIXA DE SER O PRINCIPAL PARA SER UMA CONEXÃO ENTRE A PRIMEIRA PAGINA E AS ROTAS*/}
    <StatusBar/>
      <Routes/>
    
    </>
  );
} 