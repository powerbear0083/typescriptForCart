import React from 'react';
import './App.scss';
import logo from './assets/logo.svg';
import { displayProducts, basketProducts } from './Model';

console.log('basketProducts', basketProducts);
function App() {
    return (
        <div className="cart-wrap w-96 mx-auto">
            <div className="cart-header p-2 text-center">
                <a href=""><img src={logo} alt=""/></a>
            </div>
            {
                Object.keys(basketProducts).map((basketItem) => {
                    {console.log('basketItem', basketItem)}
                    return 1
                })
            }
        </div>
    )
}

export default App
