import React, { Component } from 'react';
import axios from 'axios';
const API_URL = 'https://api.codigodelnorte.com';

export default class ApiConnect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            params: [],
            status: null
        };
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts = () => {
        const url = `${API_URL}/gann`;
        axios.get(url)
            .then(res => {
                this.setState({
                    params: res.data,
                    status: 'success'
                });
            });
    }

    render() {
        if (Object.keys(this.state.params).length > 0 && this.state.status === 'success') {
            //Hay elementos y los mostrará
            return (

                <React.Fragment>
                    <h2>Listado de parámetros.</h2>
                    <hr />
                    <ul>
                        <li key='A001'>  name: {this.state.params.name}</li>
                        <li key='A002'>  success: {this.state.params.success ? 'true' : 'false'}</li>
                    </ul>
                    <hr />
                    <div className='form-group'>
                    <input type='button' className="btn btn-info buttonExport" value="Exportar CSV" />
                    <input type='button' className="btn btn-info buttonExport" value="Exportar XML" />
                    <input type='button' className="btn btn-info buttonExport" value="Exportar JSON" />
                        </div>
                    
                </React.Fragment>
            );
        } else {
            //Está cargando
            return (
                <React.Fragment>
                    <h2>Procesando...</h2>
                    <p>Espere mientras se carga el contenido.</p>
                </React.Fragment>
            );
        }

    }
}
