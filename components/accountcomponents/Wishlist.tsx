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
            image:TrayTable,
            color:'black'
        },
        {
            name: "Olivia Emma",
            dates: "October 17,2023",
            status: "Delivered",
            price: "$90K",
            image: TrayTable,
            color:'black'
        },
        {
            name: "William Benjamin",
            dates: "October 17,2023",
            status: "Delivered",
            price: "$80K",
            image: TrayTable,
            color:'black'
        },
        {
            name: "Henry Theodore",
            dates: "October 17,2023",
            status: "Delivered",
            price: "$120K",
            image: TrayTable,
            color:'black'
        },
        {
            name: "Amelia Elijah",
            dates: "October 17,2023",
            status: "Delivered",
            price: "$75K",
            image: TrayTable,
            color:'black'
        },
    ]
    return (
        <main>
            <ELText text='Your wishlist' className={'text-[20px] font-semibold'} />
            <table className="w-full table-auto text-sm text-left mt-5">
                <thead className=" text-gray-300 font-normal border-b">
                    <tr>
                        <th className="py-3 px-6">Product</th>
                        <th className="py-3 px-6">Prices</th>
                        <th className="py-3 px-6">Action</th>

                    </tr>
                </thead>
                <tbody className="text-black divide-y ">
                    {
                        tableItems.map((item, idx) => (
                            <tr key={idx}>
                                <td className="px-6 py-4 flex gap-2 items-center">
                                    <Image src={AddIcon} alt="Add Icon" className="rotate-45" />
                                    <Image src={item.image} alt="Tray Table" className="w-[60px] bg-gray-200" />
                                    <div className="flex flex-col gap-2"> 
                                        <div>
                                            <ELText text={item.name} className={'font-semibold'}/>
                                        </div>
                                        <ELText text={` Color: ${item.color}`} className={'text-gray-400'}/>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.dates}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <ELButton name="Add to cart" className="bg-black text-white px-4 py-2 rounded-lg" />
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
    )
}
export default Wishist