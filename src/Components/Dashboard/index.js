import React, { Component } from 'react';
import TodoInput from '../../Helper/TodoInput'
import GetTodos from '../../Helper/GetTodos'

import Drawer from '../../Helper/Drawer';
import swal from 'sweetalert'

import { connect } from 'react-redux';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.todoGet = React.createRef();
    }


    addTask = () => {
        if (this.state.TaskName != null) {
            let TaskName = this.state.TaskName;
            let desc = this.state.Description;
            fetch('/todos/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: TaskName, desc: desc })
            })
               .catch(error => console.log(error.message)
               )

               this.todoGet.current.getTodos();


        } else {
            swal('Please fill the above boxes.')
        }
    }

    handleChange = (name, e) => {
        this.setState({
            [name]: e
        })
    }


    render() {
        return (
            <div>
                <Drawer />
                <main style={{ width: '100%', padding: 10 }}>
                    <div style={{ width: '85%', marginLeft: '10%', marginRight: '10%', }}>

                        <TodoInput
                            handleChange={this.handleChange}
                            addTask={this.addTask}
                        />
                    </div>
                    <div style={{ width: '85%', marginLeft: '10%', marginTop: '3%', }}>
                        <GetTodos ref={this.todoGet} />
                    </div>
                </main>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}


export default connect(mapStateToProps)(Dashboard);
