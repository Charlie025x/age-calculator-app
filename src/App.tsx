import dArrow from "../public/assets/images/icon-arrow.svg";

function App() {
  return (
    <div className=" mx-2  mt-12 rounded-2xl rounded-br-[5rem] bg-white px-4 py-10">
      <form
        action=""
        className="relative grid grid-cols-3 gap-4 border-b-2  pb-10"
      >
        <div className="font-extrabold text-gray-600">
          <label htmlFor="day" className=" text-xs uppercase">
            day
          </label>
          <input
            type="text"
            className="max-w-full rounded-lg border p-3"
            placeholder="DD"
          />
        </div>
        <div className="font-extrabold text-gray-600">
          <label htmlFor="month" className=" text-xs uppercase">
            month
          </label>
          <input
            type="text"
            className="max-w-full rounded-lg border p-3"
            placeholder="DD"
          />
        </div>
        <div className="font-extrabold text-gray-600">
          <label htmlFor="year" className=" text-xs uppercase">
            year
          </label>
          <input
            type="text"
            className="max-w-full rounded-lg border p-3"
            placeholder="DD"
          />
        </div>
        <button className="">
          <img
            src={dArrow}
            alt=""
            className="absolute bottom-0 left-1/2 aspect-square w-14 max-w-full -translate-x-1/2 translate-y-1/2 rounded-full bg-purple-600 p-3"
          />
        </button>
      </form>

      <div className="pt-16 text-6xl italic">
        <h3 className="font-extrabold">
          <span className=" text-purple-600">38</span> years
        </h3>
        <h3 className="font-extrabold">
          <span className=" text-purple-600">3</span> months
        </h3>
        <h3 className="font-extrabold">
          <span className=" text-purple-600">26</span> days
        </h3>
      </div>
    </div>
  );
}

export default App;
