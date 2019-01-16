import React, { Component } from 'react';
import TodoInput from '../../Helper/TodoInput'
import GetTodos from '../../Helper/GetTodos'

import Drawer from '../../Helper/Drawer';
import swal from 'sweetalert'

import { connect } from 'react-redux';

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
                <Drawer />
                <main style={{width: '100%', padding: 10}}>
                    <div style={{width: '85%',marginLeft: '10%', marginRight: '10%',}}>

                        <TodoInput
                            handleChange={this.handleChange}
                            addTask={this.addTask}
                        />
                    </div>
                    <div style={{width: '85%',marginLeft:'10%',marginTop: '3%',}}>
                        <GetTodos />
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