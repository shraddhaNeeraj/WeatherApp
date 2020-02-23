import React, {Component} from "react";
import Card from "react-bootstrap/Card";

class Alerts extends Component {

    createAlertList = () => {
        let list = [];
        for (let i = 0; i < this.props.alerts.length; i++) {

            list.push(<Card key={Math.random().toString()} style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>{this.props.alerts[i]['title']}</Card.Title>
                    <Card.Text>
                        {this.props.alerts[i]['description']}
                    </Card.Text>
                </Card.Body>
            </Card>)
        }
        return list;
    };

    render() {
        return (
                <div>
                    {this.createAlertList()}
                </div>
        );
    }
}

export default Alerts;
