import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {image, name} = props.data;
    return (
        <div className="cart-div">
            <img className="cart-image" src={image} alt="" />
            <h1 style={{color: 'gray'}}>{name}</h1>
            <button className="cart-button" onClick={()=> props.handleCart(props.data)}>Add employee</button>
        </div>
    );
};

export default Cart;