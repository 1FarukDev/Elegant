"use client"

import ELButton from "../Atoms/ELButton"
import ELInput from "../Atoms/ELInput"
import ELText from "../Atoms/ELText"
import { useForm } from "react-hook-form"
import { useSelector } from 'react-redux';

const AccountDetails = () => {
    const user = useSelector((state: any) => state.user);
    console.log(user);
    const { register } = useForm()
    return (
        <main >
            <div className="flex flex-col gap-6">
                <ELText text='Account Details' className={'text-[20px]'} />
                <ELInput name="fname" placeholder={user.userOtherProfile.first_name} register={register} label="FIRST NAME *" className={' border border-[#6C7275]'} labelClassName=" text-[#6C7275]" />
                <ELInput name="lname" placeholder={user.userOtherProfile.last_name} register={register} label="LAST NAME *" className={' border border-[#6C7275]'} labelClassName=" text-[#6C7275]" />
                <div>
                    <ELInput name="dname" placeholder={user.userOtherProfile.display_name} register={register} label="DISPLAY NAME *" className={' border border-[#6C7275]'} labelClassName=" text-[#6C7275]" />
                    <i className="text-gray-400 text-[10px]">This will be how your name will be displayed in the account section and in reviews</i>
                </div>
                <ELInput name='email' placeholder={user.userOtherProfile.email} register={register} label="EMAIL *" className={' border border-[#6C7275]'} labelClassName=" text-[#6C7275]" />

         </div>
            <div className="flex flex-col gap-6 mt-10">
                <ELText text='Password' className={'text-[20px]'} />
                <ELInput name="oldpassword" placeholder="Old password" register={register} label="OLD PASSWORD" className={' border border-[#6C7275]'} labelClassName=" text-[#6C7275]" />
                <ELInput name="newpassword" placeholder="New password" register={register} label="NEW PASSWORD" className={' border border-[#6C7275]'} labelClassName=" text-[#6C7275]" />
            
                <ELInput name="repeatnewpassword" placeholder="Repeat new password" register={register} label="REPEAT NEW PASSWORD" className={' border border-[#6C7275]'} labelClassName=" text-[#6C7275]" />
         </div>
         <ELButton name="Save Changes" className="px-10 py-3 mt-6 bg-black text-white rounded-lg"/>
        </main>
    )
}

export default AccountDetails