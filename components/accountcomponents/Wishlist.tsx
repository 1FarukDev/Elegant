import ELButton from "../Atoms/ELButton"
import ELText from "../Atoms/ELText"
import AddIcon from '@/public/assets/icons/add icon.svg'
import Image from "next/image"
import TrayTable from '@/public/assets/images/Tray table.png'
const Wishist = () => {
    const tableItems = [
        {
            name: "Liam James",
            dates: "October 17,2023",
            status: "Delivered",
            price: "$100K",
            image: TrayTable,
            color: 'black'
        },
        {
            name: "Olivia Emma",
            dates: "October 17,2023",
            status: "Delivered",
            price: "$90K",
            image: TrayTable,
            color: 'black'
        },
        {
            name: "William Benjamin",
            dates: "October 17,2023",
            status: "Delivered",
            price: "$80K",
            image: TrayTable,
            color: 'black'
        },
        {
            name: "Henry Theodore",
            dates: "October 17,2023",
            status: "Delivered",
            price: "$120K",
            image: TrayTable,
            color: 'black'
        },
        {
            name: "Amelia Elijah",
            dates: "October 17,2023",
            status: "Delivered",
            price: "$75K",
            image: TrayTable,
            color: 'black'
        },
    ]
    return (
        <main>
            <ELText text='Your wishlist' className={'text-[20px] font-semibold my-10 md:my-0'} />
            <table className="w-full table- text-sm text-left mt-5 hidden md:block">
                    <div className="flex justify-between">
                        <th className="py-3 px-6 w-[60%]">Product</th>
                    <th className="py-3 px-6 w-1/3">Prices</th>
                    <th className="py-3 px-6 w-1/3">Action</th>

                    </div>
                <div className="text-black divide-y ">
                    {
                        tableItems.map((item, idx) => (
                            <div key={idx} className="flex justify-between w">
                                <td className="px-6 py-4 flex gap-2 items-center w-[60%]">
                                    <Image src={AddIcon} alt="Add Icon" className="rotate-45" />
                                    <Image src={item.image} alt="Tray Table" className="w-[60px] bg-gray-200" />
                                    <div className="flex flex-col gap-2">
                                        <div>
                                            <ELText text={item.name} className={'font-semibold'} />
                                        </div>
                                        <ELText text={` Color: ${item.color}`} className={'text-gray-400'} />
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap w-1/3">{item.price}</td>
                                <td className="px-6 py-4 whitespace-nowrap w-1/3">
                                    <ELButton name="Add to cart" className="bg-black text-white px-4 py-2 rounded-lg" />
                                </td>

                            </div>
                        ))
                    }
                </div>
            </table>
        <div className="md:hidden">
                <div className="border-b pb-2 text-gray-400">Product</div>
                {tableItems.map((item, idx) => {
                    return (
                        <main key={idx}>
                            <div className="flex gap-3 items-center my-4">
                                <Image src={AddIcon} alt="Add Icon" className="rotate-45" />
                                <Image src={item.image} alt="Tray Table" className="w-[60px] bg-gray-200" />
                                <div className="flex flex-col gap-1">
                                    <div>
                                        <ELText text={item.name} className={'font-semibold text-sm'} />
                                    </div>
                                    <ELText text={` Color: ${item.color}`} className={'text-gray-400 text-sm'} />
                                    <ELText text={`${item.price}`} className={'text-gray-400 text-sm'} />
                                </div>

                            </div>
                            <ELButton name="Add to cart" className="bg-black text-white px-4 py-2 rounded-lg w-full mb-2 text-sm" />
                            <hr />

                        </main>
                    )
                })}
        </div>
        </main>
    )
}
export default Wishist