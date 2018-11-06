import React, { Component, Fragment } from 'react';

import { updateUser, removeUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';

import Button from '../../Helper/Button'
import swal from 'sweetalert'


import firebase from '../../Config/firebase'
const database = firebase.database().ref()
const provider = new firebase.auth.FacebookAuthProvider();

class Authentication extends Component {

    Login = () => {
        console.log(`login`);
    }

    fbLogin = () => {
        firebase.auth().signInWithPopup(provider)
            .then((result) => {

                const userDetails = result.user.providerData[0];

                this.props.onUpdateUser({
                    Name: userDetails.displayName,
                    email: userDetails.email,
                    photo: userDetails.photoURL,
                    Uid : result.user.uid
                })

                database.child('users').child(result.user.uid).set({
                    Name: userDetails.displayName,
                    email: userDetails.email,
                    photo: userDetails.photoURL
                }, () => {
                    this.props.history.push('/')
                    }
                )
            }).catch(function (error) {
                swal(error.message)
            });
    }


    render() {
        return (
            <Fragment>
                <h1 className="display-4" >ToDo List</h1>

                <div>
                    <Button 
                    variant='contained' 
                    btnColor='secondary' 
                    click={this.Login}
                    >Login
                    </Button>

                    <Button 
                    variant='contained' 
                    btnColor='primary' 
                    click={this.fbLogin}
                    >Use Facebook
                    </Button>
                    
                </div>
            </Fragment>

        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        state
    }
}

const mapDispatchToProps = {
    onUpdateUser: updateUser,
    onRemoveUser: removeUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);