import { useContext, useState } from "react"
import { UserDataContext } from "../../context/UserDataContext"

export default function Form() {
    const { userData, setUserData } = useContext(UserDataContext)
    const { setConfirm } = useContext(UserDataContext)
    const [errors, setErrors] = useState({
        cardholderName: "",
        cardNumber: "",
        month: "",
        year: "",
        cvc: "",
    })

    function validate() {
        const newErrors = {}
        if (!userData.cardholderName) newErrors.cardholderName = "Can't be blank"
        if (userData.cardNumber.toString().length != 16) newErrors.cardNumber = "Wrong format, 16 numbers"
        if (!userData.cardNumber) newErrors.cardNumber = "Can't be blank"
        if (userData.year > 99 || userData.year < 1) newErrors.year = "Wrong format"
        if (userData.month > 12 || userData.month < 1 || userData.month.toString().lenght != 2) newErrors.month = "Wrong format"
        if (!userData.month) newErrors.month = "Can't be blank"
        if (!userData.year) newErrors.year = "Can't be blank"
        if (userData.cvc <= 99 || userData.cvc > 999) newErrors.cvc = "Wrong format"
        if (!userData.cvc) newErrors.cvc = "Can't be blank"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    function handleChange(event) {
        const { name, value } = event.target
        setUserData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (validate()) setConfirm(true)
    }

    return (
        <div>
            <form className="text-very_dark_violet text-sm font-semibold tracking-widest w-96 lg:w-80">
                <div className="flex flex-col mb-4">
                    <label className="mb-2" htmlFor="cardholder-name">CARDHOLDER NAME</label>
                    <input
                        className="border-[1px] rounded-lg border-light_violet p-2 outline-none focus:border-very_dark_violet transition mb-2"
                        id="cardholder-name"
                        type="text"
                        placeholder="e.g. Jane Applessed"
                        name="cardholderName"
                        onChange={handleChange}
                        value={userData.cardholderName}
                    />
                    {errors.cardholderName && <span className="text-xs text-error">{errors.cardholderName}</span>}
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-2" htmlFor="card-number">CARD NUMBER</label>
                    <input
                        className="border-[1px] rounded-lg border-light_violet p-2 outline-none focus:border-very_dark_violet transition mb-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        id="card-number"
                        type="number"
                        placeholder="e.g 1234 5678 9123 0000"
                        name="cardNumber"
                        onChange={handleChange}
                        value={userData.cardNumber}
                    />
                    {errors.cardNumber && <span className="text-xs text-error">{errors.cardNumber}</span>}
                </div>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <label htmlFor="month">EXP. DATE (MM/YY)</label>
                        <div className="flex gap-4 mt-2 mb-2">
                            <input
                                className="border-[1px] rounded-lg border-light_violet p-2 outline-none focus:border-very_dark_violet transition w-20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                id="month"
                                type="number"
                                placeholder="MM"
                                name="month"
                                onChange={handleChange}
                                value={userData.month}
                            />
                            <input
                                className="border-[1px] rounded-lg border-light_violet p-2 outline-none focus:border-very_dark_violet transition w-20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                id="year"
                                type="number"
                                placeholder="YY"
                                name="year"
                                onChange={handleChange}
                                value={userData.year}
                            />
                        </div>
                        {(errors.month || errors.year) && <span className="text-xs text-error">{errors.month || errors.year}</span>}
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="mb-2" htmlFor="cvc">CVC</label>
                        <input
                            className="border-[1px] rounded-lg border-light_violet p-2 outline-none focus:border-very_dark_violet transition w-full mb-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            id="cvc"
                            type="number"
                            placeholder="e.g. 123"
                            name="cvc"
                            onChange={handleChange}
                            value={userData.cvc}
                        />
                        {errors.cvc && <span className="text-xs text-error">{errors.cvc}</span>}
                    </div>
                </div>
                <button className="w-full p-4 bg-very_dark_violet text-white rounded-lg hover:bg-opacity-90 transition" onClick={handleSubmit}>Confirm</button>
            </form>
        </div>

    )
}