import React, { Component, Fragment } from 'react';
import Paper from '../Paper'


class GetTodos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todosList: [],
            isLoaded: false,
            isLoading: true
        };
    }


    componentDidMount() {
        this.getTodos()
    }

    getTodos() {
        fetch('/todos/getAll')
            .then(res => res.json())
            .then(todos =>
                this.setState({
                    todosList: todos,
                    isLoaded: true,
                    isLoading: false
                })
            )
            .catch(error => console.log(error.message)
            )
    }

    remove = (key, arrayKey) => {
        fetch('/todos/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: key })
        })
            .then(Response => {
                // console.log('resp', Response);

                let array = this.state.todosList
                array.splice(arrayKey, 1)
                this.setState({
                    todosList: array
                })
            })
            .catch(error => console.log(error.message)
            )

    }

    render() {
        const { todosList, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <Fragment >
                    {todosList.map((item, index) => {
                        return <Paper key={item._id} style={{ padding: 10, float: 'left', width: 340, height: 120, marginRight: 8 }}>
                            <h3 style={{ float: 'left' }}>{item.title}</h3>
                            <button
                                onClick={(key, arrayKey) => this.remove(item.title, index)}
                                style={{
                                    float: 'right',
                                    marginRight: 5,
                                    border: 'none',
                                    color: 'white',
                                    background: '#ff6666',
                                    width: 55,
                                    borderRadius: '15px'
                                }}>X</button>
                            <p style={{ float: 'left', clear: 'both' }}>{item.desc}</p>
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