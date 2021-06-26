import React, { Component } from 'react';
import logo from '../assets/img/logo.svg';
import Menu from './Menu';

class Header extends Component {

    render() {
        return (

            <header id="header">
                <div className="center">
                    {/* Carga el logo */}
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>GANN</strong>Service
                        </span>
                    </div>

                    {/* Carga el menú */}
                    <Menu/>

                    {/* Limpiar flotados */}
                    <div className="clearfix"></div>
                </div>
            </header>

        );
    }

}

export default Header;