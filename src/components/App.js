import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import AppShell from './AppShell';
import Home from './Home'
import Users from './Users'
import Notification from './Notification'

class App extends React.Component {
    render() {
        return (
            <Router>
                <AppShell>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/users" component={Users}/>
                        <Route exact path="/notification" component={Notification}/>
                    </div>
                </AppShell>
            </Router>
        )
    }
}

export default App;