import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC6v4IxtnSSxhdkT3rRBrBd5jneQuOEz2Q",
    authDomain: "test-803cf.firebaseapp.com",
    databaseURL: "https://test-803cf.firebaseio.com",
    projectId: "test-803cf",
    storageBucket: "test-803cf.appspot.com",
    messagingSenderId: "323624478186"
};

class Notification extends React.Component {
    static firebaseApp;
    
    constructor(props) {
        super(props);
        if (!Notification.firebaseApp) {
            Notification.firebaseApp = firebase.initializeApp(config);
        }
        this.state = {
            token: ''
        };
    }

    handleMessage = () => {}

    componentDidMount() {
        const messaging = firebase.messaging();
        messaging.onMessage(this.handleMessage);
        messaging.requestPermission()
            .then(() => messaging.getToken())
            .then(token => this.setState({token: token}));
    }

    render() {
        return (
            <div>
                Notification {this.state.token}
            </div>
        )
    }
}

export default Notification;