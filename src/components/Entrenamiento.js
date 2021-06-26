import React, { Component } from 'react';
import Formulario from './Formulario';

export default class Entrenamiento extends Component {
    render(){
        return(
            <header className="App-header">
            <h1>Entrenamiento.</h1>
            <p><Formulario/></p>
          </header>
        );
    }
}
