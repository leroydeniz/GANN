import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import utf8 from 'utf8';
import iconv from 'iconv-lite';
import loading from '../assets/img/lr2.gif';
import FileClassifySpecs from './FileClassifySpecs';
const API_URL = 'https://miescher.csic.edu.uy';

function sendWithAxios(formData) {
    axios({
        method: "post",
        url: `${API_URL}/classify`,
        data: formData,
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            "Content-Type": "multipart/form-data"
        },
    })
        .then(function (response) {
            // correcto, hay que mostrar el response en pantalla

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

                var fileContent = utf8.encode(response.data.file);
                fileContent = iconv.encode(Buffer.from(response.data.file), 'iso-8859-1');
                var archivo = new Blob([fileContent], { type: 'text/csv' });
                var csvURL = window.URL.createObjectURL(archivo);
                var tempLink = document.createElement('a');
                tempLink.href = csvURL;
                tempLink.setAttribute('download', 'clasificado.csv');
                tempLink.click();
            }
        })
        .catch(function (response) {
            // mostrar código de error
            console.log(response);
        });
}

export default class FormClasificar extends Component {


    // constructor de la clase y definición de las variables de estado
    constructor(props) {
        super(props);
        this.state = {
            //email: null,
            service: 'classify',
            terms: false,
            train: null,
            test: null,
            extTrain: null,
            extTest: null
        }
    }

    // referencias a los campos del formulario
    //emailRef = React.createRef();
    termsRef = React.createRef();

    readFile = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsBinaryString(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    // función que actualiza el contenido del dataset en la variable de estado
    onTrainUpload = (event) => {
        try {
            this.setState({ train: event.target.files[0] });
            var fileExt = (event.target.files[0].name).split('.').pop();
            this.setState({ extTrain: fileExt })
        } catch (e) {
            console.error("Fichero train eliminado.");
        }
    };
    // función que actualiza el contenido del dataset en la variable de estado
    onTestUpload = (event) => {
        try {
            this.setState({ test: event.target.files[0] });
            var fileExt = (event.target.files[0].name).split('.').pop();
            this.setState({ extTest: fileExt })
        } catch (e) {
            console.error("Fichero test eliminado.");
        }
    };

    updateTerms = (event) => {
        this.setState({ terms: !(document.getElementById("terms").checked) })
        document.getElementById("enviar").disabled = !document.getElementById("terms").checked;
    }


    // función que se ejecuta al enviar el formulario
    onFormSubmit = (e) => {

        // para el flujo de eventos correspondiente al envío
        e.preventDefault();

        // Función de cambio de vista
        document.getElementById("div-entrenar").classList.remove('showing');
        document.getElementById("div-entrenar").classList.add('not-showing');
        document.getElementById("div-loading").classList.remove('not-showing');
        document.getElementById("div-loading").classList.add('showing');

        // actualizo las variables de estado con los valores del formulario
        //this.setState({ email: this.emailRef.current.value });
        this.setState({ terms: this.termsRef.current.value });

        // Crear el objeto de tipo FormData
        var formData = new FormData();

        /* Cargar el objeto
        formData.append(
            'email', this.emailRef.current.value
        );*/

        formData.append(
            'servicio', this.state.service
        );

        formData.append(
            'test', this.state.test, 'test'
        );

        formData.append(
            'train_extension', this.state.extTrain
        );

        formData.append(
            'test_extension', this.state.extTest
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

        if (this.state.extTrain === "onnx") {
            this.readFile(this.state.train).then(
                data => {
                    var decFile = iconv.decode(data, 'ISO-8859-1');
                    decFile = new File([decFile], {'type': 'text/plain'});
                    formData.append(
                        'train', decFile, 'train'
                    );
                    sendWithAxios(formData);
                }
            ).catch( data => {
                console.log(data)
            });
        } else {
            var decFile = this.state.train
            formData.append(
                'train', decFile
            );
            sendWithAxios(formData);
        }
    };

    render() {
        return (
            <React.Fragment>

                <header className="App-header">
                    <h1><b>Clasificar.</b></h1>

                    <div id='div-entrenar' className="showing">
                        <div className='form-group'>
                            <p><b>Resultado:</b> conjunto de datos clasificado.</p>
                        </div>
                        <FileClassifySpecs />
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
{/*
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
*/}
                            <div className='form-group'>
                                <p>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="terms"
                                            id="terms"
                                            value="Acepto"
                                            ref={this.termsRef}
                                            defaultChecked={false}
                                            onChange={this.updateTerms} />
                                        Entiendo que el uso de esta aplicación es experimental.
                                    </label>
                                </p>
                            </div>

                            <div className='form-group'>
                                <input id="enviar" type='submit' className="btn btn-info" disabled={true} value="Clasificar" />
                            </div>

                        </form>
                    </div>

                    <div id='div-loading' className="not-showing">
                        <br /><h2>La aplicación está procesando.<br/>Esto puede demorar un rato...</h2>
                        <img src={loading} width="600px;" alt="loading" id="img-loading" />
                    </div>

                    <div id='div-metricas' className="not-showing">
                        <br /><h2>Métricas</h2>
                        <p>
                            Se han descargado los casos clasificados.
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
