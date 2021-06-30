import React, { Component } from 'react';
import FormClasificar from './FormClasificar';
import FormEvaluar from './FormEvaluar';
import FormEntrenar from './FormEntrenar';

export default class Entrenamiento extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opcion: null
        };
    }

    handleChange = (e) => {
        this.setState({ opcion: e.target.value }, this.handleSubmit);
        //No se puede poner el alert acá porque no ha dado el tiempo de actualizar el valor aún
    }

    componentDidUpdate(prevProps, prevState) {
        //alert(this.state.opcion);
    }

    render() {
        return (
            <header className="App-header">
                <h1>Servicios.</h1>
                <div id="radio-buttons">
                    <p>
                        Entrenar
                        <input
                            id="entrenar"
                            className="RadioButton"
                            value="Entrenar"
                            name="servicios"
                            type="radio"
                            onChange={this.handleChange}
                        />
                        Evaluar
                        <input
                            id="evaluar"
                            className="RadioButton"
                            value="Evaluar"
                            name="servicios"
                            type="radio"
                            onChange={this.handleChange}
                        />
                        Clasificar
                        <input
                            id="clasificar"
                            className="RadioButton"
                            value="Clasificar"
                            name="servicios"
                            type="radio"
                            onChange={this.handleChange}
                        />
                    </p>

                </div>

                {this.state.opcion === 'Entrenar' &&
                    <FormEntrenar />
                }
                {this.state.opcion === 'Evaluar' &&
                    <FormEvaluar />
                }
                {this.state.opcion === 'Clasificar' &&
                    <FormClasificar />
                }
            </header>
        );
    }
}
