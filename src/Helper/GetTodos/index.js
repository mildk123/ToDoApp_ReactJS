import React, { Component, Fragment } from 'react';
import Paper from '../Paper'

import firebase from '../../Config/firebase'
const database = firebase.database().ref()

class GetTodos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todosList: [],
            isLoaded: false,
            isLoading: true
        };
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                database.child('tasks').child(user.uid).on('child_added', (callback) => {
                    let todos = callback.val()
                    let todo = [{
                        key: callback.key,
                        Heading: todos.Heading,
                        Description: todos.Description
                    }]
                    this.setState({
                        todosList: [...this.state.todosList, ...todo],
                        isLoaded: true,
                        isLoading: false
                    })
                })
            } else {
                // No user is signed in.
                this.props.history.push('./Authentication')
            }
        });
    }

    remove = (key, arrayKey) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                database.child('tasks').child(user.uid).child(key).remove()
                let array = this.state.todosList
                array.splice(arrayKey, 1)
                this.setState({
                    todosList: array
                })
            } else {
                // No user is signed in.
                this.props.history.push('./Authentication')
            }
        });
    }

    render() {
        const { todosList, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <Fragment >
                    {todosList.map((item, index) => {
                        return <Paper key={item} style={{ padding: 10, float: 'left', width: 340, height: 120, marginRight: 8 }}>
                            <h3 style={{ float: 'left' }}>{item.Heading}</h3>
                            <button
                                onClick={(key, arrayKey) => this.remove(item.key, index)}
                                style={{
                                    float: 'right',
                                    marginRight: 5,
                                    border: 'none',
                                    color: 'white',
                                    background: '#ff6666',
                                    width: 55,
                                    borderRadius: '15px'
                                }}>X</button>
                            <p style={{ float: 'left', clear: 'both' }}>{item.Description}</p>
                        </Paper>
                    })}
                </Fragment>
            )
        }
        return (
            <h3 style={{ flex: 1, alignContent: 'center', alignItems: ' center', justifyContent: 'center' }}>Wait...</h3>
        )
    }
}

export default GetTodos;