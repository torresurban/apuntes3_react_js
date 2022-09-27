import React, { Component } from 'react';

class ComponenteClass2 extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.mensaje}</h2>
            </div>
        );
    }
}

export default ComponenteClass2;
