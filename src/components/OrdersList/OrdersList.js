import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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

export class OrderMiniItem extends React.Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={phone} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.text}
                    </Card.Text>
                    <Button variant="primary"><Link to={`/gn/order-details/${this.props.id}`}>Go detail</Link></Button>
                </Card.Body>
            </Card>
        )
    }
}


export class OrdersListComponent extends React.Component {
    render() {
        return (
            <div>
                <h2> Orders List Component </h2>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    {
                        orders.map((order) => <OrderMiniItem key={order.id} {...order}></OrderMiniItem>)
                    }
                </div>
            </div>
        )
    }
}