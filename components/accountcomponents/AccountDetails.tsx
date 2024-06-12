"use client"

import ELButton from "../Atoms/ELButton"
import ELInput from "../Atoms/ELInput"
import ELText from "../Atoms/ELText"
import { useForm } from "react-hook-form"
import { useSelector } from 'react-redux';
import { supabase } from "@/utils/supabase/client"
const AccountDetails = () => {
    const user = useSelector((state: any) => state.user);
    const { register, handleSubmit } = useForm()
    // console.log(user.userOtherProfile.user_id)

    const handleSaveForm = async (data: any) => {
        console.log(data);
        try {
            const { data: updatedData, error } = await supabase
                .from('user_profile')
                .update({
                    first_name: data.first_name,
                    last_name: data.last_name,
                    display_name:data.username,
                    email: data.email // corrected to use data.email instead of editedUser.email
                })
                .eq('user_id', user.userOtherProfile.user_id);
            if (error) throw error;
            console.log('User updated successfully:', updatedData);
            // Refresh the user list after update
        } catch (error) {
            console.error('Error updating user:', error);
        }
    }

    return (
        <form onSubmit={handleSubmit(handleSaveForm)}>
            <div className="flex flex-col gap-6">
                <ELText text='Account Details' className={'text-[20px]'} />
                <ELInput name="fname" placeholder={user?.userOtherProfile?.first_name || "First name"} register={register} label="FIRST NAME *" className={' border border-[#6C7275]'} labelClassName=" text-[#6C7275]" />
                <ELInput name="lname" placeholder={user?.userOtherProfile?.last_name || "Last name"} register={register} label="LAST NAME *" className={' border border-[#6C7275]'} labelClassName=" text-[#6C7275]" />
                <div>
                    <ELInput name="username" placeholder={user?.userOtherProfile?.username || 'Display name'} register={register} label="DISPLAY NAME *" className={' border border-[#6C7275]'} labelClassName=" text-[#6C7275]" />
                    <i className="text-gray-400 text-[10px]">This will be how your name will be displayed in the account section and in reviews</i>
                </div>
                {/* <ELInput name='email' placeholder={user?.userOtherProfile?.email} register={register} label="EMAIL *" className={' border border-[#6C7275]'} labelClassName=" text-[#6C7275]" /> */}

            </div>
            <div className="flex flex-col gap-6 mt-10">
                <ELText text='Password' className={'text-[20px]'} />
                <ELInput name="oldpassword" placeholder="Old password" register={register} label="OLD PASSWORD" className={' border border-[#6C7275]'} labelClassName=" text-[#6C7275]" />
                <ELInput name="newpassword" placeholder="New password" register={register} label="NEW PASSWORD" className={' border border-[#6C7275]'} labelClassName=" text-[#6C7275]" />

                <ELInput name="repeatnewpassword" placeholder="Repeat new password" register={register} label="REPEAT NEW PASSWORD" className={' border border-[#6C7275]'} labelClassName=" text-[#6C7275]" />
            </div>
            <ELButton name="Save Changes" className="px-10 py-3 mt-6 bg-black text-white rounded-lg" type="submit" />
        </form>
    )
}

export default AccountDetails