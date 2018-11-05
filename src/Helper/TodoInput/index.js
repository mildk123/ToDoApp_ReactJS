import React from 'react';

import Paper from '../Paper';
import TextField from '@material-ui/core/TextField';
import Button from '../Button'




class todoInput extends React.Component {
    constructor(){
        super()
        this.state = {}
    }
    render() {
        return (
            <div>
                <Paper style={{ margin: 10, padding: 6 }} elevation={1}>
                    <TextField
                        label="Task Name"
                        onChange={(event) => this.props.handleChange('TaskName', event.target.value)}
                        margin="dense"
                        fullWidth
                    />
                    <TextField
                        label="Descprition"
                        multiline
                        rowsMax="4"
                        onChange={(event) => this.props.handleChange('Description', event.target.value)}
                        margin="normal"
                        fullWidth
                    />

                    <Button 
                    btnWidth="30%" 
                    btnMargin="4%"
                    variant="contained" 
                    btnColor="secondary"
                    click={() => this.props.addTask()}                    >
                    Add
                    </Button>
                </Paper>
            </div>
        );
    }
}

export default todoInput;
