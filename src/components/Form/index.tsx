import useUserData from "../../hooks/useUserData";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent } from "react";

const schema = z.object({
  cardholderName: z
    .string()
    .nonempty("Can't be blank")
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "The name must contain only letters"),
  cardNumber: z
    .string()
    .min(16, "The card number must be 16 digits long")
    .max(16, "The card number must be 16 digits long")
    .regex(/^\d+$/, "Only numbers are allowed"),
  month: z.string().regex(/^(0[1-9]|1[0-2])$/, "Wrong format"),
  year: z.string().regex(/^\d{2}$/, "Wrong format"),
  cvc: z
    .string()
    .length(3, "Wrong format")
    .regex(/^\d+$/, "Only numbers are allowed"),
});

type Formprops = z.infer<typeof schema>;

export default function Form() {
  const { setUserData, setIsSubmitted } = useUserData();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Formprops>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmitData(data: Formprops) {
    if (isValid) {
      setIsSubmitted(true);
      console.log(data);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitData)}
      className="flex flex-col text-very_dark_violet text-sm font-semibold tracking-widest w-96 max-xl:w-80"
    >
      <div className="flex flex-col mb-2">
        <label className="mb-2" htmlFor="cardholderName">
          CARDHOLDER NAME
        </label>
        <input
          {...register("cardholderName")}
          className="border-[1px] w-full rounded-lg border-light_violet p-2 outline-none focus:border-very_dark_violet transition bg-white mb-2"
          placeholder="e.g. Jane Applessed"
          id="cardholderName"
          onChange={handleChange}
          autoFocus
          type="text"
        />
        {errors.cardholderName?.message && (
          <p className="text-xs text-error mb-2">
            {errors.cardholderName.message}
          </p>
        )}
      </div>

      <div className="flex flex-col mb-2">
        <label className="mb-2" htmlFor="cardNumber">
          CARD NUMBER
        </label>
        <input
          {...register("cardNumber")}
          className="border-[1px] w-full rounded-lg border-light_violet p-2 outline-none focus:border-very_dark_violet transition bg-white mb-2"
          placeholder="e.g 1234 5678 9123 0000"
          id="cardNumber"
          onChange={handleChange}
          maxLength={16}
          type="text"
        />
        {errors.cardNumber?.message && (
          <p className="text-xs text-error mb-2">{errors.cardNumber.message}</p>
        )}
      </div>

      <div className="flex mb-2">
        <div className="mr-4 w-48">
          <label className="mb-2" htmlFor="month">
            EXP. DATE (MM/YY)
          </label>
          <div className="flex gap-4 my-2">
            <input
              {...register("month")}
              className="border-[1px] w-full rounded-lg border-light_violet p-2 outline-none focus:border-very_dark_violet transition bg-white"
              placeholder="MM"
              id="month"
              onChange={handleChange}
              maxLength={2}
              type="text"
            />

            <input
              {...register("year")}
              className="border-[1px] w-full rounded-lg border-light_violet p-2 outline-none focus:border-very_dark_violet transition bg-white"
              placeholder="YY"
              id="year"
              onChange={handleChange}
              maxLength={2}
              type="text"
            />
          </div>
          {(errors.year?.message || errors.month?.message) && (
            <p className="text-xs text-error mb-2">
              {errors.year?.message || errors.month?.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="mb-2" htmlFor="cvc">
            CVC
          </label>
          <input
            {...register("cvc")}
            className="border-[1px] w-full rounded-lg border-light_violet p-2 outline-none focus:border-very_dark_violet transition bg-white mb-2"
            placeholder="e.g. 123"
            id="cvc"
            onChange={handleChange}
            maxLength={3}
            type="text"
          />
          {errors.cvc?.message && (
            <p className="text-xs text-error mb-2">{errors.cvc.message}</p>
          )}
        </div>
      </div>

      <button
        className="w-full p-4 bg-very_dark_violet text-white rounded-lg hover:bg-very_dark_violet/80 transition cursor-pointer"
        type="submit"
      >
        Confirm
      </button>
    </form>
  );
}
