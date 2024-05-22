import ELText from "../Atoms/ELText"

const OrderHistory = () => {
    const tableItems = [
        {
            id: "Liam James",
            dates: "October 17,2023",
            status: "Delivered",
            price: "$100K"
        },
        {
            id: "Olivia Emma",
            dates: "October 17,2023",
            status: "Delivered",
            price: "$90K"
        },
        {
            id: "William Benjamin",
            dates: "October 17,2023",
            status: "Delivered",
            price: "$80K"
        },
        {
            id: "Henry Theodore",
            dates: "October 17,2023",
            status: "Delivered",
            price: "$120K"
        },
        {
            id: "Amelia Elijah",
            dates: "October 17,2023",
            status: "Delivered",
            price: "$75K"
        },
    ]

    return (
        <main>
            <ELText text='Order History' className={'text-[20px] font-semibold'} />
            <div className="mt-12 shadow-sm  overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className=" text-gray-300 font-normal border-b">
                        <tr>
                            <th className="py-3 px-6">Number ID</th>
                            <th className="py-3 px-6">Dates</th>
                            <th className="py-3 px-6">Status</th>
                            <th className="py-3 px-6">Price</th>
                        </tr>
                    </thead>
                    <tbody className="text-black divide-y ">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.dates}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </main>
    )
}
export default OrderHistory