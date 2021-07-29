import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FormEntrenar from './components/FormEntrenar';
import FormEvaluar from './components/FormEvaluar';
import FormClasificar from './components/FormClasificar';
import Autor from './components/Autor';
import Index from './components/Index';
import Error from './components/Error';


class Router extends Component {
/* Configurador de rutas y páginas */ 
    render() {

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route exact path="/index" component={Index}/>;
                    <Route exact path="/entrenamiento" component={FormEntrenar}/>;
                    <Route exact path="/evaluacion" component={FormEvaluar}/>;
                    <Route exact path="/clasificacion" component={FormClasificar}/>;
                    <Route exact path="/autor" component={Autor}/>;
                    <Route component={Error}/>;
                </Switch>
            </BrowserRouter>
        );

    }

}

export default Router;