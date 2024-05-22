import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  dob: {
    year: number;
    month: number;
    day: number;
  };
}

import dArrow from "./assets/images/icon-arrow.svg";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  // console.log(watch("day")); // watch input value by passing the name of it

  return (
    <div className="mx-4 mt-20 max-w-3xl rounded-2xl rounded-br-[5rem] bg-white px-6 py-10 md:mx-auto md:mt-36 md:rounded-br-[8rem] md:p-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="relative grid grid-cols-3 gap-4 border-b-2  pb-10 md:grid-cols-4"
      >
        <div className="font-extrabold">
          <label htmlFor="day" className="block text-xs uppercase">
            day
          </label>
          <input
            {...register("dob.day", {
              required: true,
              pattern: /\b(0?[1-9]|[12][0-9]|3[01])\b/g,
              maxLength: 2,
            })}
            type="number"
            className="max-w-full rounded-lg border p-3 md:text-2xl"
            placeholder="DD"
          />
        </div>
        <div className="font-extrabold">
          <label htmlFor="month" className="block text-xs uppercase">
            month
          </label>
          <input
            {...register("dob.month", {
              required: true,
              pattern: /1[0-2]|[1-9]/,
              maxLength: 2,
            })}
            type="text"
            className="max-w-full rounded-lg border p-3 md:text-2xl"
            placeholder="MM"
          />
        </div>
        <div className="font-extrabold">
          <label htmlFor="year" className="block text-xs uppercase">
            year
          </label>
          <input
            {...register("dob.year", {
              required: true,
              pattern: /1[0-2]|[1-9]/,
              maxLength: 4,
            })}
            type="text"
            className="max-w-full rounded-lg border p-3 md:text-2xl"
            placeholder="YY"
          />
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
          <span className=" text-purple-600">--</span> years
        </h3>
        <h3 className="font-extrabold">
          <span className=" text-purple-600">--</span> months
        </h3>
        <h3 className="font-extrabold">
          <span className=" text-purple-600">--</span> days
        </h3>
      </div>
    </div>
  );
}

export default App;
