import { createContext, useState } from "react"

export const UserDataContext = createContext()

export default function UserDataProvider({ children }) {
    const [confirm, setConfirm] = useState(false)
    const [userData, setUserData] = useState({
        cardholderName: "",
        cardNumber: "",
        month: "",
        year: "",
        cvc: "",
    })

    return (
        <UserDataContext.Provider value={{
            userData,
            confirm,
            setConfirm,
            setUserData
        }}>
            {children}
        </UserDataContext.Provider>
    )
}