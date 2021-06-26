import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Entrenamiento from './components/Entrenamiento';
import Autor from './components/Autor';
import Index from './components/Index';
import Test from './components/Test';
import Error from './components/Error';


class Router extends Component {
/* Configurador de rutas y páginas */ 
    render() {

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route exact path="/index" component={Index}/>;
                    <Route exact path="/entrenamiento" component={Entrenamiento}/>;
                    <Route exact path="/test" component={Test}/>;
                    <Route exact path="/autor" component={Autor}/>;
                    <Route component={Error}/>;
                </Switch>
            </BrowserRouter>
        );

    }

}

export default Router;