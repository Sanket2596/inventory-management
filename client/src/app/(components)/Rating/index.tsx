import { Star } from 'lucide-react';
import React from 'react'

// This is the props that will be used for the rating component basically.
type RatingProps = {
    rating: number;
}

const Rating = ({rating }: RatingProps) => {
 return [1, 2, 3, 4, 5].map((index) => (
    <Star 
        key={index}
        color={index <= rating ? '#FFC107': '#E45E9'}
        className='w- 4 h-4'
    />
 ) )
}

export default Rating