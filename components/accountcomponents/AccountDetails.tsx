import ELButton from "../Atoms/ELButton";
import ELInput from "../Atoms/ELInput";
import ELText from "../Atoms/ELText";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

interface AccountDetailProps {
    handleSaveForm: any;
    loading: boolean;
    imageFile: any; // Add imageFile as a prop
}

const AccountDetails = (props: AccountDetailProps) => {
    const { handleSaveForm, loading, imageFile } = props;
    const user = useSelector((state: any) => state.user);
    const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit((data) => handleSaveForm(data, imageFile))}>
            <div className="flex flex-col gap-6">
                <ELText text="Account Details" className="text-[20px]" />
                <ELInput
                    name="first_name"
                    placeholder={user?.userOtherProfile?.first_name || "First name"}
                    register={register}
                    label="FIRST NAME *"
                    className="border border-[#6C7275]"
                    labelClassName="text-[#6C7275]"
                />
                <ELInput
                    name="last_name"
                    placeholder={user?.userOtherProfile?.last_name || "Last name"}
                    register={register}
                    label="LAST NAME *"
                    className="border border-[#6C7275]"
                    labelClassName="text-[#6C7275]"
                />
                <div>
                    <ELInput
                        name="username"
                        placeholder={user?.userOtherProfile?.username || "Display name"}
                        register={register}
                        label="DISPLAY NAME *"
                        className="border border-[#6C7275]"
                        labelClassName="text-[#6C7275]"
                    />
                    <i className="text-gray-400 text-[10px]">
                        This will be how your name will be displayed in the account section
                        and in reviews
                    </i>
                </div>
            </div>
            <div className="flex flex-col gap-6 mt-10">
                <ELText text="Password" className="text-[20px]" />
                <ELInput
                    name="oldpassword"
                    placeholder="Old password"
                    register={register}
                    label="OLD PASSWORD"
                    className="border border-[#6C7275]"
                    labelClassName="text-[#6C7275]"
                />
                <ELInput
                    name="newpassword"
                    placeholder="New password"
                    register={register}
                    label="NEW PASSWORD"
                    className="border border-[#6C7275]"
                    labelClassName="text-[#6C7275]"
                />
                <ELInput
                    name="repeatnewpassword"
                    placeholder="Repeat new password"
                    register={register}
                    label="REPEAT NEW PASSWORD"
                    className="border border-[#6C7275]"
                    labelClassName="text-[#6C7275]"
                />
            </div>
            <ELButton
                name="Save Changes"
                className="px-10 py-3 mt-6 bg-black text-white rounded-lg"
                type="submit"
                loading={loading}
            />
        </form>
    );
};

export default AccountDetails;
