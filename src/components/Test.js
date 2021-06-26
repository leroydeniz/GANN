import React, { Component } from 'react';
import ApiConnect from './ApiConnect';

export default class Test extends Component {

    render(){
        return(
            <header className="App-header">
            <h1>Test.</h1>
            
            <ApiConnect/>

          </header>
        )
    }

}