import React, { createContext, ReactNode, useContext, useState } from 'react';

interface CartProps {
    children: ReactNode;
}

export interface Data {
    id: string;
    image: string;
    name: string;
    price: string;
    score: string;
    unit: string;
}

interface CartContextData {
    cart: Data[];
    setCart: React.Dispatch<React.SetStateAction<Data[]>>;
}

const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProps) {
    const [cart, setCart] = useState<Data[]>([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
}

function useCart(): CartContextData {
    const context = useContext(CartContext);

    return context;
}

export { CartProvider, useCart };
