'use client'
// Client side component

import React from 'react'
import { useGetDashboardMetricsQuery } from '../state/api';
import { ShoppingBagIcon } from 'lucide-react';
import Rating from '../(components)/Rating'


const CardPopularProducts = () => {
  // TODO: Implement this component to display the top 15 most popular products in the inventory.
  const { data: dashBoardMetrics, isLoading } = useGetDashboardMetricsQuery()

  return (
    <div className='row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-16'>
        {isLoading ? (
            <div> Loading...</div>
        ) : (
            <>
                <h3 className='text-lg font-semibold px-7 pt-5 pb-2'>
                    Popular Products
                </h3>
                <hr />
                <div className='overflow-auto h-full'>
                    {dashBoardMetrics?.popularProducts.map((product) => (
                        <div key={product.productId} className='flex items-center justify-between gap-3 px-5 py-7 border-bottom'>
                            <div className='flex items-center gap-3'>
                                <div>
                                    img
                                </div>
                                <div className='flex flex-col justify-between gap-1'>
                                    <div className='font-bold text-gray-700'>
                                        {product.name}
                                    </div>
                                    <div className='flex text-sm itmes-center'>
                                        <span className='font-bold text-blue-500 text-xs'>
                                            ${product.price}
                                        </span>
                                        <span className='mx-2'>
                                            |
                                        </span>
                                        <div>
                                            <Rating rating={product.rating || 0}/>
                                        </div>
                                    </div>
                                </div>
                                {/* This will respresent the Right Side on the Popular Products Page */}
                                <div className='text-xs items-center flex'>
                                    <button className='p-2 rounded-full bg-blue-100 text-blue-600 mr-2'>
                                        <ShoppingBagIcon  className='w-4 h-4'/>
                                        {Math.round(product.stockQuantity / 1000)} k Sold
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </>
        )};
    </div>
  )
}

export default CardPopularProducts