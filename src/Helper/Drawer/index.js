import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List'; import MailIcon from '@material-ui/icons/Mail';

import { connect } from 'react-redux';
import firebase from '../../Config/firebase'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


class SwipeableTemporaryDrawer extends React.Component {
    state = {
        left: false
    };

    toggleDrawer = (boolean) => () => {
        this.setState({
            left: boolean,
        });
    };

    componentWillReceiveProps(props) {
        this.setState({
            left: props.authReducer.signout
        })
    }

    signout = () => {
        firebase.auth().signOut()
    }

    render() {

        const sideList = (
            <div >
                <List>
                    <ListItem onClick={this.signout}>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary='Sign Out' />
                    </ListItem>
                </List>
            </div>
        );


        return (
            <div>
                <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.toggleDrawer(false)}
                    onOpen={this.toggleDrawer(true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={(boolean) => this.toggleDrawer(false)}
                        onKeyDown={(boolean) => this.toggleDrawer(false)}
                    >
                        {sideList}
                    </div>
                </SwipeableDrawer>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps)(SwipeableTemporaryDrawer);
