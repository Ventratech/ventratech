'use client';

import { Product } from '@/modules/types';
import { createContext, useContext, useState } from 'react';

type CartContextType = {
	cart: Product[];
	addToCart: (product: Product) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [cart, setCart] = useState<Product[]>([]);

	const addToCart = (product: Product) => {
		setCart((prev) => [...prev, product]);
	};

	return (
		<CartContext.Provider value={{ cart, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) throw new Error('useCart must be used within a CartProvider');
	return context;
};
