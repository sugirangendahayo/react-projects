import React, { useReducer } from 'react';

const Cart = () => {
    const items = [
        { id: 1, name: 'Item 1', price: 100 },
        { id: 2, name: 'Item 2', price: 200 },
        { id: 3, name: 'Item 3', price: 300 },
    ];
    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                alert('Item added to cart');
                return [...state, action.payload];
            case 'REMOVE':
                alert('Item removed from cart');
                return state.filter(item => item.id !== action.payload);
            default:
                return state;
        }
    };
    
    const [cart, dispatch] = useReducer(reducer, []);

    
    return (
        <div className='flex items-center justify-around gap-4'>
            {items.map(item => (
                <div key={item.id}  className='p-2 rounded bg-white '>
                    <h3 className='text-lg font-semibold'>{item.name}</h3>
                    <p className='text-gray-600'>{item.price}</p>
                    <button onClick={() => dispatch({ type: 'ADD', payload: item })} className='bg-black text-white px-4 py-2 rounded'>Add to cart</button>
                </div>
            ))}
            {cart.map(item => (
                <div key={item.id} className='p-2 rounded bg-white flex flex-col gap-2'>
                    <h3 className='text-lg font-semibold'>{item.name}</h3>
                    <p className='text-gray-600'>{item.price}</p>
                    <button onClick={() => dispatch({ type: 'REMOVE', payload: item.id })} className='bg-red-500 text-white px-4 py-2 rounded'>Remove from cart</button>
                </div>
            ))}
        </div>
    );
}

export default Cart;
