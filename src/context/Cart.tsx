import React, { createContext, useState, useContext } from 'react';

interface Data {
    id: string;
    img: string;
    trademark: string;
    price: string;
    delivery: string;
    cart: number;
}

const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState<Data[]>([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

    const { cart, setCart } = context;

    return { cart, setCart };
}
