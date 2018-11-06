import React from 'react';
import AppBar from '../../Helper/AppBar'
import Drawer from '../../Helper/Drawer'

const Error = () => {
    return (
        <div>
            <AppBar color="secondary">Error</AppBar>
            <Drawer />
            <h1>
                Error 404 //// Page not found..
            </h1>
        </div>
    );
}

export default Error;