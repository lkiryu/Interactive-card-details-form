import Cards from "./components/Cards";
import Form from "./components/Form";
import SuccessMessage from "./components/SuccessMessage";
import useUserData from "./hooks/useUserData";

export default function App() {
  const { isSubmitted } = useUserData();

  return (
    <main className="flex items-center justify-center min-h-screen bg-[url(/assets/images/bg-main-desktop.png)] bg-no-repeat bg-contain font-Space_Grotesk max-lg:bg-[url(/assets/images/bg-main-desktop.png)] max-lg:bg-[length:100%_35%] max-lg:h-auto max-lg:p-12">
      <div className="flex items-center justify-center gap-60 max-xl:gap-20 max-lg:flex-col">
        <Cards />
        {isSubmitted && <SuccessMessage />}
        {!isSubmitted && <Form />}
      </div>
    </main>
  );
}
