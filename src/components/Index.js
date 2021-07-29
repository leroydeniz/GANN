import React, { Component } from 'react';

export default class Index extends Component {
  render() {
    return (
      <header className="App-header">
        <h1>GANN Service.</h1>
        <p>
          Los algoritmos de clasificación supervisada resuelven un tipo de problemas específicos donde se cuenta con una serie de datos previamente clasificados. Para poder decidir la clase de una muestra, se tiene en cuenta toda la información que se pueda extraer del conjunto de datos inicial, cuya clase es conocida por el clasificador.<br/><br/>
          En este trabajo se implementa una aplicación web, que permite al usuario interactuar a través de un webservice, con una API (Application Programming Interface) capaz de entrenar y aproximar muy bien un óptimo global de una red neuronal profunda mediante algoritmos genéticos, con las funcionalidades de entrenamiento, evaluación y clasificación.<br/><br/>
          La aplicación es construida sobre una arquitectura de tres capas, contando con una interfaz web diseñada en ReactJS, que permitirá al usuario interactuar con las funcionalidades del software de clasificación.<br/><br/>
          Se aborda el diseño del Core utilizando técnicas de clasificación supervisada bajo entrenamiento de redes neuronales profundas, optimizándolas a través de backpropagation y evolucionándolas con algoritmos genéticos. La API es construida en Python con Flask a nivel de Controlador y PyTorch como framework en el Core. Este último será el responsable de entrenar la red neuronal y hacerla evolucionar hasta lograr una aproximación muy cercana al óptimo global. El uso de metaheurísticas permite a la red modificar sus pesos y crecer o reducir, tanto en número de nodos como de capas de manera dinámica, en función de lo que ella misma considere necesaria para su propio entrenamiento.<br/>
        </p>
      </header>
    );
  }
}