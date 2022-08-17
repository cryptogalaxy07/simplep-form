import bg_1 from "../assets/bg-1.jpg";

export default function BackgroundView() {
  return (
    <div>
      <div className=" w-full">
        <button className=" absolute  mt-72 mx-10 hover:bg-sky-600 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded text-3xl">
          Get Started
        </button>
        <img src={bg_1} className="w-full h-96" />
      </div>
    </div>
  );
}