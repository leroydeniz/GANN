import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class FormClasificar extends Component {

    //Se generan los enlaces para poder tener acceso a los datos que vamos a recoger
    emailRef = React.createRef();
    dataset1Ref = React.createRef();
    dataset2Ref = React.createRef();
    termsRef = React.createRef();

    recibirFormulario = (e) => {
        //Evita que se recargue la página y se envíe el formulario
        e.preventDefault();
        var email = this.emailRef.current.value;
        var dts1 = this.dataset1Ref.current.value;
        var dts2 = this.dataset2Ref.current.value;
        var terms = this.termsRef.current.value;

        if (terms) {
            this.render(email + dts1 + dts2);
        }
    }

    render() {
        return (
            <React.Fragment>
                <br /><h2>Clasificar</h2>
                <p>Para clasificar un dataset, ingrese un dataset de train que genere el clasificador o la definición de la RN, y un dataset sin clasificar.<br/>El resultado será el dataset clasificado.</p><br />
                <form onSubmit={this.recibirFormulario}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input className="form-control" type='email' id='email' name='email' placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" ref={this.emailRef} required />
                    </div>

                    <div className="input-group mb-3">
                        <input className="form-control" type='file' id='dataset1' name='dataset1' placeholder="Dataset de train" aria-label="Dataset de train" aria-describedby="basic-addon1" ref={this.dataset1Ref} required />
                    </div>

                    <div className="input-group mb-3">
                        <input className="form-control" type='file' id='dataset2' name='dataset2' placeholder="Dataset de test" aria-label="Dataset de test" aria-describedby="basic-addon1" ref={this.dataset2Ref} />
                    </div>

                    <div className='form-group'>
                        <p><label><input type="checkbox" name="terms" id="terms" value="Acepto" ref={this.termsRef} defaultChecked={true} /> Acepto los términos y condiciones del servicio.</label></p>
                    </div>

                    <div className='form-group'>
                        <input type='submit' className="btn btn-info" value="Clasificar" />
                    </div>

                </form>
            </React.Fragment>
        );

    }
}
