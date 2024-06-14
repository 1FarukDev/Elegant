"use client"

import ELButton from "../Atoms/ELButton"
import ELInput from "../Atoms/ELInput"
import ELText from "../Atoms/ELText"
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from 'react-redux';
import { supabase } from "@/utils/supabase/client"
import { saveUserOtherProfile } from "@/lib/features/authentication/user_slice"
import { toast } from "react-toastify"
import { useState } from "react"
const AccountDetails = () => {
    const user = useSelector((state: any) => state.user);
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [loading, setLoading] = useState(false)
    console.log(user.userOtherProfile)

    const handleSaveForm = async (data: any) => {
        setLoading(true)
        // Create an object to hold the fields to update
        const fieldsToUpdate: any = {};

        // Add fields to the update object only if they are not empty
        if (data.first_name) {
            fieldsToUpdate.first_name = data.first_name;
        }
        if (data.last_name) {
            fieldsToUpdate.last_name = data.last_name;
        }
        if (data.username) {
            fieldsToUpdate.username = data.username;
        }

        // Check if there's anything to update
        if (Object.keys(fieldsToUpdate).length === 0) {
            console.log('No fields to update');
            return;
        }

        try {
            const { data: updatedData, error } = await supabase
                .from('user_profile')
                .update(fieldsToUpdate)
                .eq('user_id', user.userOtherProfile.user_id);

            if (error) throw error;

            console.log('User updated successfully:', updatedData);

            // Update the Redux store with the new values, keeping other fields unchanged
            dispatch(saveUserOtherProfile({
                ...user.userOtherProfile,
                ...fieldsToUpdate,
            }));
            toast.success('Profile has been successfully updated')
            setLoading(false)
            // Refresh the user list after update if needed
        } catch (error) {
            setLoading(false)
            toast.error('Error updating')
            console.error('Error updating user:', error);
        }
    };


    return (
        <form onSubmit={handleSubmit(handleSaveForm)}>
            <div className="flex flex-col gap-6">
                <ELText text='Account Details' className={'text-[20px]'} />
                <ELInput name="first_name" placeholder={user?.userOtherProfile?.first_name || "First name"} register={register} label="FIRST NAME *" className={' border border-[#6C7275]'} labelClassName=" text-[#6C7275]" />
                <ELInput name="last_name" placeholder={user?.userOtherProfile?.last_name || "Last name"} register={register} label="LAST NAME *" className={' border border-[#6C7275]'} labelClassName=" text-[#6C7275]" />
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
            <ELButton name="Save Changes" className="px-10 py-3 mt-6 bg-black text-white rounded-lg" type="submit" loading={loading}/>
        </form>
    )
}

export default AccountDetails