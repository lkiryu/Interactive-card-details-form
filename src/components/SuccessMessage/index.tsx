import useUserData from "../../hooks/useUserData";

export default function SuccessMessage() {
  const { setUserData, setIsSubmitted } = useUserData();

  function handleReset() {
    setUserData({
      cardholderName: "",
      cardNumber: "",
      month: "",
      year: "",
      cvc: "",
    });
    setIsSubmitted(false);
  }

  return (
    <div className="flex flex-col justify-center items-center w-96 max-xl:w-80 gap-4">
      <img src="/assets/images/icon-complete.svg" alt="icon complete" />
      <h2 className="text-3xl text-very_dark_violet font-semibold tracking-widest">
        THANK YOU!
      </h2>
      <p className="text-lg text-dark_violet mb-4">
        We've added your card details
      </p>
      <button
        className="w-full p-4 bg-very_dark_violet text-white rounded-lg hover:bg-very_dark_violet/80 transition cursor-pointer"
        onClick={handleReset}
      >
        Continue
      </button>
    </div>
  );
}
