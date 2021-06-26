import React, { Component } from 'react';
import axios from 'axios';
const API_URL = 'https://jsonplaceholder.typicode.com';

export default class ApiConnect extends Component {

    state = {
        posts: [],
        status: null
    };

    componentWillMount() {
        this.getPosts();
    }

    getPosts = () => {
        const url = `${API_URL}/posts`;
        axios.get(url)
            .then(res => {
                this.setState({
                    posts: res.data,
                    status: 'success'
                });
            });
    }

    render() {
        if (this.state.posts.length >= 1 && this.state.status === 'success') {
            //Hay elementos y los mostrará
            var listOfParametres = this.state.posts.map((parameter) => {
                return (
                    <React.Fragment>
                        <p>
                            UserId: {parameter.userId}<br />
                            PostId: {parameter.id}<br />
                            Title: {parameter.title}<br />
                            Parameter: {parameter.body}<br />
                        </p>
                        <hr />
                    </React.Fragment>
                );
            });

            return (
                <React.Fragment>
                    <h2>Listado de parámetros.</h2>
                    {listOfParametres}
                </React.Fragment>
            );
        } else if (this.state.posts.length === 0 && this.state.status === 'success') {
            //No hay elementos creados pero la petición se realizó correctamente
            return (
                <h2>La consulta no ha devuelto datos.</h2>
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