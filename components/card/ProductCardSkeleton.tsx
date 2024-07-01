import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductCardSkeleton: React.FC = () => {
    return (
        <div className=" relative cursor-pointer w-full  rounded-lg  justify-center">
            <div className="h-[349px]  rounded-md relative">
                <Skeleton height="100%" width="100%" className="absolute top-0 left-0 object-cover rounded-md" />
            </div>
            <div className="flex justify-between items-start absolute top-3 w-full md:px-4 px-2">
                <div className="">
                    <Skeleton width={50} height={20} className="rounded-lg mb-2" />
                    <Skeleton width={50} height={20} className="rounded-lg" />
                </div>
                <div className="flex justify-end w-full">
                    <Skeleton circle={true} height={24} width={24} />
                </div>
            </div>
            
            <div className="mt-4">
              
                <div className="flex gap-1">
                    {Array.from({ length: 5 }, (_, index) => (
                        <Skeleton key={index} circle={true} height={20} width={20} />
                    ))}
                </div>
                <Skeleton width="100%" height={20} />
                <div className="flex gap-4 mt-2">
                    <Skeleton width={60} height={20} />
                    <Skeleton width={60} height={20} />
                </div>
            </div>
        </div>
    );
};

export default ProductCardSkeleton;
