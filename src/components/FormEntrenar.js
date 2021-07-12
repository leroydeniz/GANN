import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
const API_URL = 'https://miescher.csic.edu.uy';

export default class FormEntrenar extends Component {

    // constructor de la clase y definición de las variables de estado
    constructor(props) {
        super(props);
        this.state = {
            service: 'train',
            email: null,
            terms: null,
            train: null
        }
    }

    // referencias a los campos del formulario
    emailRef = React.createRef();
    termsRef = React.createRef();

    // función que actualiza el contenido del dataset en la variable de estado
    onFileUpload = (event) => {
        this.setState({ train: event.target.files[0] });
        console.log(this.state);
    };

    // función que se ejecuta al enviar el formulario
    onFormSubmit = (e) => {

        // para el flujo de eventos correspondiente al envío
        e.preventDefault();

        // actualizo las variables de estado con los varlores del formulario
        this.setState({ email: this.emailRef.current.value });
        this.setState({ terms: this.termsRef.current.value });

        // Crear el objeto de tipo FormData
        var formData = new FormData();

        // Cargar el objeto 
        formData.append(
            'email', this.emailRef.current.value
        );
        formData.append(
            'servicio', this.state.service
        );
        formData.append(
            'train', this.state.train, 'train'
        );
        formData.append(
            'terms', this.termsRef.current.value
        );
        
        axios({
            method: "post",
            url: `${API_URL}/train`,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
              // todo correcto, hay que mostrar el response en pantalla
              console.log(response);
            })
            .catch(function (response) {
              // mostrar código de error
              console.log(response);
            });

    };


    render() {
        return (
            <React.Fragment>
                <h1>Entrenar</h1>

                <div className='form-group'>
                    <p><b>Resultado:</b> configuración de una red neuronal y las métricas de evaluación de ésta.</p>
                </div>

                <form onSubmit={this.onFormSubmit} id="formServicios">


                    <div className="input-group mb-3">
                        <p>Conjunto de datos de entrenamiento:</p>
                    </div>

                    <div className="input-group mb-3">
                        <input
                            className="form-control"
                            type='file'
                            id='train'
                            name='train'
                            placeholder="Dataset de train"
                            aria-label="Dataset de train"
                            aria-describedby="basic-addon1"
                            ref={this.trainRef}
                            onChange={this.onFileUpload}
                            required />
                    </div>

                    <div className="input-group mb-3">
                        <p>Email (opcional):</p>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span
                                className="input-group-text"
                                id="basic-addon1">@
                            </span>
                        </div>
                        <input
                            className="form-control"
                            type='email'
                            id='email'
                            name='email'
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                            ref={this.emailRef} />
                    </div>

                    <div className='form-group'>
                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    name="terms"
                                    id="terms"
                                    value="Acepto"
                                    ref={this.termsRef}
                                    defaultChecked={true} />
                                Acepto los términos y condiciones del servicio.
                            </label>
                        </p>
                    </div>

                    <div className='form-group'>
                        <input type='submit' className="btn btn-info" value="Entrenar" />
                    </div>

                </form>
            </React.Fragment>
        );

    }
}
