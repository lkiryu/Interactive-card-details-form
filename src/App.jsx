import { useContext } from "react"
import { UserDataContext } from "./context/UserDataContext"
import Cards from "./components/Cards"
import Form from "./components/Form"
import icon_complete from "./assets/images/icon-complete.svg"

function App() {
  const { setUserData } = useContext(UserDataContext)
  const { confirm, setConfirm } = useContext(UserDataContext)

  function restart() {
    setUserData({
      cardholderName: "",
      cardNumber: "",
      month: "",
      year: "",
      cvc: "",
    })
    setConfirm(false)
  }

  return (
    <main className="flex items-center justify-center h-screen bg-main_desktop bg-no-repeat bg-contain font-Space_Grotesk md:bg-main_mobile md:bg-[length:100%_35%] md:h-auto md:p-12">
      <div className="flex items-center justify-center gap-60 lg:gap-20 md:flex-col">
        <Cards />
        {confirm
          ?
          <div className="flex flex-col justify-center items-center w-96 lg:w-80 gap-4">
            <img src={icon_complete} alt="icon complete" />
            <h2 className="text-3xl text-very_dark_violet font-semibold tracking-widest">THANK YOU!</h2>
            <p className="text-lg text-dark_violet mb-4">We've added your card details</p>
            <button className="w-full p-4 bg-very_dark_violet text-white rounded-lg hover:bg-opacity-90 transition" onClick={restart}>Continue</button>
          </div>
          :
          <Form />
        }
      </div>
    </main>
  )
}

export default App
