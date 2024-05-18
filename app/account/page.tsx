import ELText from "@/components/Atoms/ELText"
import AccountDetails from "@/components/accountcomponents/AccountDetails"
import AccountTab from "@/components/accountcomponents/AccountTab"

const Account = () => {

    return (
        <main className="container mx-auto py-20">
            <div className="flex justify-center">
                <ELText text='My Account' className={'text-[35px] mb-20 font-extrabold'}/>
            </div>
            <section className="flex gap-20 items-start">
                <div className="w-[30%]">
                    <AccountTab />
                </div>
               <div className="w-full">
                    <AccountDetails />
               </div>
            </section>
        </main>
    )
}

export default Account