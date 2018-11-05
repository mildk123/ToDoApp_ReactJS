import React, { Component } from 'react';
import TodoInput from '../../Helper/TodoInput'
import GetTodos from '../../Helper/GetTodos'

import Appbar from '../../Helper/AppBar'
import swal from 'sweetalert'

import firebase from '../../Config/firebase'
const database = firebase.database().ref()

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.history.push('./')
            } else {
                // No user is signed in.
                this.props.history.push('./Authentication')
            }
        });
    }

    addTask = () => {
        if (this.state.TaskName != null) {

            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    database.child('tasks').child(user.uid).push({
                        Heading: this.state.TaskName,
                        Description: this.state.Description,
                    })
                }
            })
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
                <Appbar color="secondary">Dashboard</Appbar>
                <div>
                    <TodoInput
                        handleChange={this.handleChange}
                        addTask={this.addTask}
                    />
                </div>
                <div>
                    <GetTodos />
                </div>
            </div>
        );
    }
}

export default Dashboard;