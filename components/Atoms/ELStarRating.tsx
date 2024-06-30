// components/StarRating.tsx

import React from 'react';
import { MdStarRate } from 'react-icons/md';

interface StarRatingProps {
    totalStars: number;
    starRating: number;
    className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars = 5, starRating, className }) => {
    return (
        <div className={`flex gap-1 ${className}`}>
            {Array.from({ length: totalStars }, (_, index) => (
                <MdStarRate
                    key={index}
                    className={`star ${index < starRating ? 'text-black' : 'text-gray-400'}`}
                />
            ))}
        </div>
    );
};

export default StarRating;
