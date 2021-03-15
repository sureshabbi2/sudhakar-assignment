import React from 'react';
import { Card, Button } from 'react-bootstrap';
import phone from '../../images/phone.png';



//Fake Data
const orders = [
    {
        id: 1,
        title: 'Laptop',
        text: 'This is a Laptop'
    },
    {
        id: 2,
        title: 'Mobile',
        text: 'This is a Mobile'
    }
];



export class OrderItem extends React.Component {
    render() {
        const orderId = this.props.match.params.id;
        const order = orders.find((order)=>order.id==orderId);
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={phone} />
                <Card.Body>
                    <Card.Title>{order.title}</Card.Title>
                    <Card.Text>
                        {order.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}