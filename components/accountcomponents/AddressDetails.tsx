import ELText from "../Atoms/ELText"
import EditIcon from '@/public/assets/icons/accountedit.svg'
import Image from "next/image"
import { useSelector } from 'react-redux';


const AddressDetails = () => {
    const user = useSelector((state: any) => state.user);
    return (
        <main>
            <ELText text='Address' className={'text-[20px] font-semibold'} />
            <div className="mt-5 md:flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2 md:w-[370px] border border-black py-4 px-6 rounded-lg ">
                   <div className="flex justify-between items-center">
                        <ELText text='Billing Address' className={'font-semibold'}/>
                        <Image src={EditIcon} alt="Edit icon" />
                   </div>
                    <div className="flex gap-2">
                        <ELText text={user?.userOtherProfile?.first_name} />
                        <ELText text={user?.userOtherProfile?.last_name} />
                    </div>
                    <ELText text={user?.userOtherProfile?.phone_number} />
                    <ELText text={user?.userOtherProfile?.billing_address} />
                </div>
                <div className="flex flex-col gap-2 md:w-[370px] border mt-5 md:mt-0 border-black py-4 px-6 rounded-lg ">
                    <div className="flex justify-between items-center">
                        <ELText text='Shipping Address' className={'font-semibold'} />
                        <Image src={EditIcon} alt="Edit icon" />
                    </div>
                    <div className="flex gap-2">
                        <ELText text={user?.userOtherProfile?.first_name} />
                        <ELText text={user?.userOtherProfile?.last_name} />
                    </div>
                    <ELText text={user?.userOtherProfile?.phone_number} />
                    <ELText text={user?.userOtherProfile?.billing_address} />
                </div>
            </div>
        </main>
    )
}

export default AddressDetails