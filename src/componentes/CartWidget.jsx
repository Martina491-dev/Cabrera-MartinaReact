import React from 'react';
import { addToCart, updateCartCount } from './carrito'; 

const CartWidget = () => {
    return (<>
        <div className="carrito-widget">
            <button onClick={addToCart}>Agregar al carrito</button>
            <span id="carrito-count">0</span>
        </div>
    </>);
};

export default CartWidget;
