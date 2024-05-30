import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import dArrow from "./assets/images/icon-arrow.svg";

interface IFormInput {
  year: number;
  month: number;
  day: number;
}

function App() {
  const [dayDiff, setDayDiff] = useState<number>(0);
  const [monthDiff, setMonthDiff] = useState<number>(0);
  const [yearDiff, setYearDiff] = useState<number>(0);
  const [currentDate, setCurrentDate] = useState<Date>();

  const { register, handleSubmit, getValues, formState } =
    useForm<IFormInput>();
  const { errors } = formState;

  const calcAge = () => {
    if (currentDate) {
      let dayCheck = currentDate.getDate() - getValues("day");
      let monthCheck = currentDate.getMonth() - getValues("month");
      let yearCheck = currentDate.getFullYear() - getValues("year");

      if (dayCheck < 0) {
        dayCheck += 30;
        monthCheck--;
      }

      if (monthCheck < 0) {
        monthCheck += 12;
        yearCheck--;
      }

      setDayDiff(dayCheck);
      setMonthDiff(monthCheck);
      setYearDiff(yearCheck);
    }
  };

  const onSubmit: SubmitHandler<IFormInput> = () => {
    setCurrentDate(new Date());
    calcAge();
  };

  return (
    <div className="mx-4 mt-20 max-w-3xl rounded-2xl rounded-br-[5rem] bg-white px-6 py-10 md:mx-auto md:mt-36 md:rounded-br-[8rem] md:p-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="relative grid grid-cols-3 gap-4 border-b-2  pb-10 md:grid-cols-4"
      >
        <div className="font-extrabold">
          <label
            htmlFor="day"
            className={`block text-xs uppercase ${errors.day?.message ? "text-red-600" : ""}`}
          >
            day
          </label>
          <input
            {...register("day", {
              required: "This field is required",
              pattern: {
                value: /\b(0?[1-9]|[12][0-9]|3[01])\b/g,
                message: "Must be a valid day",
              },
              maxLength: 2,
            })}
            type="text"
            maxLength={2}
            className={`max-w-full rounded-lg border p-3 md:text-2xl ${errors.day?.message ? "border-red-600" : ""}`}
            placeholder="DD"
          />
          <p className=" text-xs font-light text-red-600">
            {errors.day?.message}
          </p>
        </div>
        <div className="font-extrabold">
          <label
            htmlFor="month"
            className={`block text-xs uppercase ${errors.month?.message ? "text-red-600" : ""}`}
          >
            month
          </label>
          <input
            {...register("month", {
              required: "This field is required",
              pattern: {
                value: /(^0?[1-9]$)|(^1[0-2]$)/,
                message: "Must be a valid month",
              },
              maxLength: 2,
            })}
            type="text"
            maxLength={2}
            className={`max-w-full rounded-lg border p-3 md:text-2xl ${errors.month?.message ? "border-red-600" : ""}`}
            placeholder="MM"
          />
          <p className=" text-xs font-light text-red-600">
            {errors.month?.message}
          </p>
        </div>
        <div className="font-extrabold">
          <label
            htmlFor="year"
            className={`block text-xs uppercase ${errors.year?.message ? "text-red-600" : ""}`}
          >
            year
          </label>
          <input
            {...register("year", {
              required: "This field is required",
              pattern: {
                value: /(?:(?:19|20)[0-9]{2})/,
                message: "Must be a valid year",
              },
              maxLength: 4,
            })}
            type="text"
            maxLength={4}
            className={`max-w-full rounded-lg border p-3 md:text-2xl ${errors.year?.message ? "border-red-600" : ""}`}
            placeholder="YY"
          />
          <p className=" text-xs font-light text-red-600">
            {errors.year?.message}
          </p>
        </div>
        <button className="">
          <img
            src={dArrow}
            alt=""
            className="absolute bottom-0 left-1/2 aspect-square w-14 max-w-full -translate-x-1/2 translate-y-1/2 rounded-full bg-purple-600 p-3 hover:bg-black md:left-auto md:right-0 md:translate-x-0 "
          />
        </button>
      </form>

      <div className="pt-16 text-5xl italic md:text-7xl">
        <h3 className="font-extrabold">
          <span className=" text-purple-600">{yearDiff ? yearDiff : "--"}</span>{" "}
          years
        </h3>
        <h3 className="font-extrabold">
          <span className=" text-purple-600">
            {monthDiff ? monthDiff : "--"}
          </span>{" "}
          months
        </h3>
        <h3 className="font-extrabold">
          <span className=" text-purple-600">{dayDiff ? dayDiff : "--"}</span>{" "}
          days
        </h3>
      </div>
    </div>
  );
}

export default App;
