import useUserData from "../../hooks/useUserData";

export default function Cards() {
  const { userData } = useUserData();

  return (
    <div className="flex flex-col gap-8 text-white max-lg:flex-col-reverse max-lg:gap-0">
      <div className="bg-[url(/assets/images/bg-card-front.png)] bg-cover h-[245px] w-[447px] z-10 p-6 tracking-widest max-xl:h-[164px] max-xl:w-[300px] max-lg:-mt-16">
        <img
          className="mb-16 max-xl:w-16 max-xl:mb-4"
          src="/assets/images/card-logo.svg"
          alt="card logo"
        />
        <h2 className="text-3xl mb-4 max-xl:text-lg">
          {userData.cardNumber ? userData.cardNumber : "0000 0000 0000 0000"}
        </h2>
        <div className="flex justify-between">
          <p className="uppercase truncate">
            {userData.cardholderName
              ? userData.cardholderName
              : "JANE APPLESEED"}
          </p>
          <div>
            <span>{userData.month ? userData.month : "00"}</span>/
            <span>{userData.year ? userData.year : "00"}</span>
          </div>
        </div>
      </div>
      <div className="relative bg-[url(/assets/images/bg-card-back.png)] bg-cover h-[245px] w-[447px] ml-20 max-xl:h-[164px] max-xl:w-[300px] max-lg:ml-4">
        <span className="absolute top-[108px] right-16 max-xl:top-[70px] max-xl:right-12">
          {userData.cvc ? userData.cvc : "000"}
        </span>
      </div>
    </div>
  );
}
