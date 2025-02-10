import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type UserDataProps = {
  cardholderName: string;
  cardNumber: string;
  month: string;
  year: string;
  cvc: string;
};

type UserDataContextType = {
  userData: UserDataProps;
  isSubmitted: boolean;
  setIsSubmitted: (value: boolean) => void;
  setUserData: Dispatch<SetStateAction<UserDataProps>>;
};

export const UserDataContext = createContext<UserDataContextType | undefined>(
  undefined
);

export default function UserDataProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userData, setUserData] = useState({
    cardholderName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  return (
    <UserDataContext.Provider
      value={{
        userData,
        isSubmitted,
        setIsSubmitted,
        setUserData,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
}
