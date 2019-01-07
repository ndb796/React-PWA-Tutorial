import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';

class Home extends React.Component {
    render() {
        return (
            <Card>
                <CardTitle title="Hello! World!"/>
                <CardText>
                    <ui>
                        <li>Hello!</li>
                        <li>Hell!</li>
                    </ui>
                </CardText>
            </Card>
        )
    }
}

export default Home;