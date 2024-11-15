import React, { FormEvent, useState } from 'react'
import { v4 } from "uuid";
import Header from '../(components)/Header/page';

type ProductFormData = {
    name: string;
    price: number;
    stockQuantity: number;
    rating: number;
};

type CreateProductModalProps = {
    isOpen: boolean,
    onClose: () => void,
    onCreate: (formData: ProductFormData) => void,
};



const CreateProductModal = ({ isOpen, onClose, onCreate }: CreateProductModalProps) => {
    const [formData, setFormData] = useState({
        productId: v4(),
        name: "",
        price: 0,
        stockQuantity: 0,
        rating: 0,
    })

    if(!isOpen) {
        return null;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData, 
            [name]: name === "price" || name === "stockQuantity" || name === "rating" ? parseFloat(value) : value });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        // Prevents refreshing of page when it reloads
        event.preventDefault();
        onCreate(formData);
        onClose();
    };
    const labelCssStyles = "block text-sm font-medium text-gray-700";
    const inputCssStyles = "block w-full p-2 border-gray-500 border-2 rounded-md";

  return (
    <div className='fixed inset-0 bg-gray-600 bg-opactiy-50 overflow-y-auto h-full w-full z-20'>
        <div className='relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white'>
            <Header name="Create New Product"/>
            <form onSubmit={handleSubmit} className='mt-5'>
                <label htmlFor='productName' className={labelCssStyles}>
                    Product Name
                </label>
                <input 
                    type='text'
                    name='name'
                    placeholder='Name'
                    onChange={handleChange}
                    value={formData.name}
                    className={inputCssStyles}
                />

                <label htmlFor='productPrice' className={labelCssStyles}>
                    Price
                </label>
                <input 
                    type='number'
                    name='price'
                    placeholder='Price'
                    onChange={handleChange}
                    value={formData.price}
                    className={inputCssStyles}
                />

                <label htmlFor='stockQuantity' className={labelCssStyles}>
                    Stock Quantity
                </label>
                <input 
                    type='number'
                    name='stockQuantity'
                    placeholder='Stock Quantity'
                    onChange={handleChange}
                    value={formData.stockQuantity}
                    className={inputCssStyles}
                />

                <label htmlFor='rating' className={labelCssStyles}>
                    rating
                </label>
                <input 
                    type='number'
                    name='rating'
                    placeholder='Rating'
                    onChange={handleChange}
                    value={formData.rating}
                    className={inputCssStyles}
                />

                <button type='submit' className=' mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
                    Create
                </button>

                <button type='button' className='ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-gray-700' onClick={onClose}>
                    Cancel
                </button>
            </form>
        </div>
    </div>
  )
}

export default CreateProductModal