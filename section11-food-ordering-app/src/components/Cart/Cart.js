import React from 'react';
import classes from './Cart.module.css';
import Model from '../UI/Model';

const Cart = (props) => {
    const cartItems = (<ul className={classes['cart-items']}>
        {[{
            id:'c1',
            name:'Sushi',
            amount: 2,
            price: 12.99
        }].map((item) => (<li key={item.id}>{item.name}</li>))}
    </ul>);
    return (
        <Model>
            {cartItems}
            <div className={classes.total}>
                <div>Total Amount</div>
                <div>35.25</div>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Model>
    )
}

export default Cart
