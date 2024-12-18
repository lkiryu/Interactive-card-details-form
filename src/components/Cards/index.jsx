import { useContext } from "react"
import { UserDataContext } from "../../context/UserDataContext"
import card_logo from "../../assets/images/card-logo.svg"

export default function Cards() {
    const { userData } = useContext(UserDataContext)

    return (
        <div className="flex flex-col gap-8 text-white md:flex-col-reverse md:gap-0">
            <div className="bg-card_front bg-cover h-[245px] w-[447px] z-10 p-6 tracking-widest lg:h-[164px] lg:w-[300px] md:-mt-16">
                <img className="mb-16 lg:w-16 lg:mb-4" src={card_logo} alt="card logo" />
                <h2 className="text-3xl mb-4 lg:text-lg">{userData.cardNumber ? userData.cardNumber : "0000 0000 0000 0000"}</h2>
                <div className="flex justify-between">
                    <p className="uppercase">{userData.cardholderName ? userData.cardholderName : "JANE APPLESEED"}</p>
                    <div>
                        <span>{userData.month ? userData.month : "00"}</span>
                        /
                        <span>{userData.year ? userData.year : "00"}</span>
                    </div>
                </div>
            </div>
            <div className="relative bg-card_back bg-cover h-[245px] w-[447px] ml-20 lg:h-[164px] lg:w-[300px] md:ml-4">
                <span className="absolute top-[108px] right-16 lg:top-[70px] lg:right-12">{userData.cvc ? userData.cvc : "000"}</span>
            </div>
        </div>
    )
}