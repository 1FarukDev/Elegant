'use client'
import ELText from "@/components/Atoms/ELText";
import AccountDetails from "@/components/accountcomponents/AccountDetails";
import AccountTab from "@/components/accountcomponents/AccountTab";
import AddressDetails from "@/components/accountcomponents/AddressDetails";
import OrderHistory from "@/components/accountcomponents/OrderHistory";
import Wishlist from "@/components/accountcomponents/Wishlist";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase/client";
import { saveUserOtherProfile } from "@/lib/features/authentication/user_slice";
import { toast } from "react-toastify";
import Avatar from "@/public/assets/images/avatar_placeholder.svg";

const Account = () => {
    const user = useSelector((state: any) => state.user);
    const router = useRouter();
    const [type, setType] = useState("Account");
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [profileImage, setProfileImage] = useState(
        user?.userOtherProfile?.profile_image || Avatar
    );
    const [imageFile, setImageFile] = useState(null)
    useEffect(() => {
        if (!user.isAuthenticated) {
            router.push("/login");
        }
    }, [user.isAuthenticated, router]);


    if (!user.isAuthenticated) {
        return null;
    }

    const handleSaveForm = async (data: any, imageFile: any) => {
        console.log(imageFile);

        setLoading(true);
        const fieldsToUpdate: any = {};

        if (data.first_name) {
            fieldsToUpdate.first_name = data.first_name;
        }
        if (data.last_name) {
            fieldsToUpdate.last_name = data.last_name;
        }
        if (data.username) {
            fieldsToUpdate.username = data.username;
        }

        try {
            let imageUrl = null;
            if (imageFile) {
                const { data: uploadData, error: uploadError } = await supabase.storage
                    .from('profile_images')
                    .upload(`public/${user?.user?.id}/profile_image`, imageFile, {
                        upsert: true,
                        cacheControl: '60',
                    });

                if (uploadError) {
                    console.log('Upload error', uploadError)
                    throw uploadError;
                }
                const { data: publicUrlData } = supabase.storage.from('profile_images').getPublicUrl(uploadData.path);
                imageUrl = publicUrlData.publicUrl;
                fieldsToUpdate.profile_image = imageUrl;
            }

            const { data: updatedData, error: updateError } = await supabase
                .from("user_profile")
                .update(fieldsToUpdate)
                .eq("user_id", user.userOtherProfile.user_id);

            if (updateError) throw updateError;

            console.log("User updated successfully:", updatedData);

            dispatch(
                saveUserOtherProfile({
                    ...user.userOtherProfile,
                    ...fieldsToUpdate,
                })
            );
            toast.success("Profile has been successfully updated");
        } catch (error) {
            console.error("Error updating user:", error);
            toast.error("Error updating");
        } finally {
            setLoading(false);
        }
    };

    const handleImageChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file);
            setProfileImage(URL.createObjectURL(file));
        }
    };

    return (
        <main className="container mx-auto py-20">
            <div className="flex justify-center">
                <ELText text="My Account" className="text-[35px] md:mb-20 mb-10 font-extrabold" />
            </div>
            <section className="md:flex gap-20 items-start px-8 md:px-0">
                <div className="md:w-[35%]">
                    <AccountTab
                        activeTab={(type: string) => setType(type)}
                        profileImage={profileImage}
                        handleImageChange={handleImageChange}
                    />
                </div>
                <div className="w-full mt-9 md:mt-0">
                    {type === "Account" && (
                        <AccountDetails
                            handleSaveForm={handleSaveForm}
                            loading={loading}
                            imageFile={imageFile} // Pass profileImage to AccountDetails
                        />
                    )}
                    {type === "Address" && <AddressDetails />}
                    {type === "Orders" && <OrderHistory />}
                    {type === "Wishlist" && <Wishlist />}
                </div>
            </section>
        </main>
    );
};

export default Account;
