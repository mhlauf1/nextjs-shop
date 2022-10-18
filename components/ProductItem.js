import React from 'react';
import Link from 'next/link';

export default function ProductItem({ product }) {
    return (
        <div className="card">
            <Link href={`/product/${product.slug}`}>
                <a href="">
                    <img src={product.image} alt={product.name} className="rounded shadow" />
                </a>
            </Link>
            <div className="flex flex-col items-center justify-center p-5">
                <Link href={`/product/${product.slug}`}>
                    <a>
                        <h2 className="text-lg">{product.name}</h2>
                    </a>
                </Link>
                <p className="mb-2">{product.brand}</p>
                <p>${product.price}</p>
                <button type="button" className="primary-button">
                    Add to cart
                </button>
            </div>
        </div>
    );
};;
