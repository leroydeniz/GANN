import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import utf8 from 'utf8';
import iconv from 'iconv-lite';
import loading from '../assets/img/lr2.gif';
import FileTestSpecs from './FileTestSpecs';
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

        // Función de cambio de vista
        document.getElementById("div-entrenar").classList.remove('showing');
        document.getElementById("div-entrenar").classList.add('not-showing');
        document.getElementById("div-loading").classList.remove('not-showing');
        document.getElementById("div-loading").classList.add('showing');

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

        if (document.getElementById("terms").checked === true) {
            formData.append(
                'terms', 'Acepto'
            );
        } else {
            formData.append(
                'terms', 'No acepto'
            );
        }

        axios({
            method: "post",
            url: `${API_URL}/test`,
            data: formData,
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                "Content-Type": "multipart/form-data"
            },
        })
            .then(function (response) {

                if ("Error" in response.data) {

                    document.getElementById("div-loading").classList.remove('showing');
                    document.getElementById("div-loading").classList.add('not-showing');
                    document.getElementById("div-error").classList.remove('not-showing');
                    document.getElementById("div-error").classList.add('showing');

                    document.getElementById("p-error").innerHTML = response.data.Error;

                } else {
                    document.getElementById("div-loading").classList.remove('showing');
                    document.getElementById("div-loading").classList.add('not-showing');
                    document.getElementById("div-metricas").classList.remove('not-showing');
                    document.getElementById("div-metricas").classList.add('showing');

                    console.log(response);

                    document.getElementById("num_capas").innerHTML = response.data.num_capas;
                    document.getElementById("num_neuronas").innerHTML = response.data.num_neuronas;
                    document.getElementById("accuracy").innerHTML = 100 - response.data.error_perc.toFixed(2);
                    document.getElementById("avg_loss").innerHTML = response.data.avg_loss.toFixed(2);
                    document.getElementById("error_perc").innerHTML = response.data.error_perc.toFixed(2);

                    var fileContent = utf8.encode(response.data.file);
                    fileContent = iconv.encode(Buffer.from(response.data.file), 'iso-8859-1');
                    var archivo = new Blob([fileContent], { type: 'text/csv' });
                    var csvURL = window.URL.createObjectURL(archivo);
                    var tempLink = document.createElement('a');
                    tempLink.href = csvURL;
                    tempLink.setAttribute('download', 'model.onnx');
                    tempLink.click();
                }
            })
            .catch(function (response) {
                // mostrar código de error
                console.log("ERROR >> " + response);

                document.getElementById("div-loading").classList.remove('showing');
                document.getElementById("div-loading").classList.add('not-showing');
                document.getElementById("div-error").classList.remove('not-showing');
                document.getElementById("div-error").classList.add('showing');

                document.getElementById("p-error").innerHTML = response;

            });

    };


    render() {
        return (
            <React.Fragment>
                <header className="App-header">
                    <h1><b>Evaluar.</b></h1>

                    <div id='div-entrenar' className="showing">
                        <div className='form-group'>
                            <p><b>Resultado:</b> datos de evaluación del clasificador.</p>
                        </div>

                        <FileTestSpecs/>
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
                                    ref={this.dataset2Ref}
                                    required />
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
                    </div>

                    <div id='div-loading' className="not-showing">
                        <br /><h2>Evaluando...</h2>
                        <img src={loading} width="400px;" alt="loading" id="img-loading" />
                    </div>

                    <div id='div-metricas' className="not-showing">
                        <br /><h2>Métricas</h2>
                        <p>
                            <li key='MET01'>  Total casos: <span id="num_capas"></span></li>
                            <li key='MET02'>  Accuracy: <span id="num_capas"></span></li>
                            <li key='MET03'>  F1-score: <span id="num_capas"></span></li>
                            <li key='MET04'>  ROC: <span id="num_capas"></span>%</li>
                        </p>
                    </div>

                    <div id='div-error' className="not-showing" border="1">
                        <h2>Error</h2>
                        <p id="p-error"></p>
                    </div>

                </header>
            </React.Fragment>
        );

    }
}
