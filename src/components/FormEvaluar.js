import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
const API_URL = 'https://miescher.csic.edu.uy';

export default class FormEvaluar extends Component {


    // constructor de la clase y definición de las variables de estado
    constructor(props) {
        super(props);
        this.state = {
            service: 'test',
            email: null,
            terms: null,
            train: null,
            test: null
        }
    }

    // referencias a los campos del formulario
    emailRef = React.createRef();
    termsRef = React.createRef();

    // función que actualiza el contenido del dataset en la variable de estado
    onTrainUpload = (event) => {
        this.setState({ train: event.target.files[0] });
        console.log(this.state);
    };
    // función que actualiza el contenido del dataset en la variable de estado
    onTestUpload = (event) => {
        this.setState({ test: event.target.files[0] });
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
            'test', this.state.test, 'test'
        );
        formData.append(
            'terms', this.termsRef.current.value
        );
        
        axios({
            method: "post",
            url: `${API_URL}/test`,
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
                <h1>Evaluar</h1>

                <div className='form-group'>
                    <p><b>Resultado:</b> datos de evaluación del clasificador.</p>
                </div>

                <form onSubmit={this.onFormSubmit} id="formServicios">

                    <div className="input-group mb-3">
                        <p>Definición de la red neuronal o conjunto de datos de entrenamiento:</p>
                    </div>
                    <div className="input-group mb-3">
                        <input
                            className="form-control"
                            type='file'
                            id='train'
                            name='train'
                            accept=".csv,.onnx"
                            placeholder="Dataset de train"
                            aria-label="Dataset de train"
                            aria-describedby="basic-addon1"
                            onChange={this.onTrainUpload}
                            ref={this.trainRef}
                            required />
                    </div>

                    <div className="input-group mb-3">
                        <p>Conjunto de datos clasificados:</p>
                    </div>
                    <div className="input-group mb-3">
                        <input
                            className="form-control"
                            type='file'
                            id='dataset2'
                            name='dataset2'
                            accept=".csv"
                            placeholder="Dataset de test"
                            aria-label="Dataset de test"
                            aria-describedby="basic-addon1"
                            onChange={this.onTestUpload}
                            ref={this.dataset2Ref} />
                    </div>

                    <div className="input-group mb-3">
                        <p>Email (opcional):</p>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span
                                className="input-group-text"
                                id="basic-addon1">@</span>
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
                        <input type='submit' className="btn btn-info" value="Evaluar" />
                    </div>

                </form>
            </React.Fragment>
        );

    }
}
