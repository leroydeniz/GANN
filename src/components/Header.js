import React, { Component } from 'react';
import Menu from './Menu';

class Header extends Component {

    render() {
        return (

            <header id="header">
                <div className="center">

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