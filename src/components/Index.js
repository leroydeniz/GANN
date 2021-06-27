import React, { Component } from 'react';

export default class Index extends Component {
    render(){
        return(
            <header className="App-header">
            <h1>GANN Service.</h1>
            <p>
              Los algoritmos de clasificación supervisada resuelven un tipo de problema específico donde se cuenta con una serie de datos previamente clasificados. Para poder decidir la clasificación de una muestra, se tiene en cuenta toda la información que se pueda extraer de un conjunto de datos inicial, de datos cuya clase es conocida por el clasificador.<br/><br/>
              En este trabajo se implementa una aplicación web que permite al usuario entrenar una red neuronal, cargando un dataset de entrenamiento para ello y devolviéndole la definición de la red entrenada junto con información sobre la fidelidad de esta. Además podrá ingresar opcionalmente un dataset adicional que será procesado y clasificado con la misma red generada.<br/><br/>
              La aplicación es construida sobre una arquitectura de tres capas, contando con una interfaz web que permitirá al usuario interactuar con el software, y cuyo Core es una API construida en Python. Esta última será la responsable de entrenar la red neuronal.<br/><br/>
              Se aborda el diseño del Core utilizando técnicas de clasificación supervisada bajo entrenamiento de redes neuronales evolutivas por medio de algoritmos genéticos. El uso de algoritmos genéticos permite a la red crecer tanto en número de nodos como de capas de manera dinámica, en función de lo que ella misma considere necesaria para su propio entrenamiento.
            </p>
          </header>
        );
    }
}