import React, { Component, Fragment } from 'react';
import Routes from '../Routes/'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Fragment>
                <Routes />
                
            </Fragment>
        );
    }
}

export default App;