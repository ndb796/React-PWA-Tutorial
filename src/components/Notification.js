import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import firebase from 'firebase';
import { Snackbar } from 'material-ui';

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
            token: '',
            toast: false,
            message: ''
        };
    }

    handleMessage = ({notification: {title = 'Title', body = 'body'} = {}}) => {
        this.setState({
            toast: true,
            message: `${title}: ${body}`
        })
    }

    componentDidMount() {
        const messaging = firebase.messaging();
        messaging.onMessage(this.handleMessage);
        messaging.requestPermission()
            .then(() => messaging.getToken())
            .then(token => this.setState({token: token}));
    }

    render() {
        const subtitleStyle = {
            wordWrap: 'break-word',
            wordBreak: 'break-all',
            hyphens: 'auto',
            padding: '10px'
        }
        return (
            <div>
                <Card>
                    <CardHeader title={'Token'} subtitle={this.state.token} subtitleStyle={subtitleStyle}/>
                </Card>
                <Snackbar open={this.state.toast}
                    message={this.state.message}
                    autoHideDuration={4000}
                    onRequestClose={() => this.setState({toast: false})}/>
            </div>
        )
    }
}

export default Notification;