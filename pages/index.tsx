import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
      <div className="bg-white p-6 rounded-2xl shadow-xl">
        <span className="font-semibold text-xl">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex justify-between my-2 odd:bg-blue-50">
              <span className="text-gray-500">Gray Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <div className="flex">
          <button className="mt-5 bg-blue-500 text-white p-3 rounded-xl w-2/4 mx-auto hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500">
            Checkout
          </button>
        </div>
      </div>

      <div className="bg-white overflow-hidden rounded-2xl shadow-xl">
        <div className="bg-blue-500 p-6 pb-14 xl:pb-48">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full"></div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 rounded-2xl shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="flex mb-5 justify-between items-center">
          <span>✔</span>
          <div className="space-x-3">
            <span>✨ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">❤</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5"></div>
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition"></button>
            </div>
            <div className="flex items-center space-x-5">
              <button className="p-2.5 bg-blue-200 flex rounded-lg justify-center items-center aspect-square w-10 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="p-2.5 bg-blue-200 flex rounded-lg justify-center items-center aspect-square w-10 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="px-8 py-2 bg-blue-500 text-center text-white rounded-xl">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-xl">
        <form className="space-y-2 p-5">
          <div className="flex flex-col">
            <input
              type="text"
              required
              placeholder="Username"
              className="border p-1 peer border-gray-400 rounded-sm"
            ></input>
            <span className="hidden peer-invalid:inline peer-invalid:text-red-500 font-semibold">
              This input is invalid
            </span>
            <span className="hidden peer-valid:inline peer-valid:text-blue-500 font-semibold">
              Awesome Username!
            </span>
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              required
              placeholder="Email"
              className="border p-1 peer border-gray-400 rounded-sm"
            ></input>
            <span className="hidden peer-invalid:inline peer-invalid:text-red-500 font-semibold">
              Email is invalid
            </span>
            <span className="hidden peer-valid:inline peer-valid:text-blue-500 font-semibold">
              Awesome email!
            </span>
          </div>

          <input
            className="bg-blue-500 p-2 rounded-lg text-white font-semibold"
            type="submit"
            value="Login"
          ></input>
        </form>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-xl">
        <details className="select-none open:text-white open:bg-indigo-400">
          <summary className="select-none cursor-pointer">
            What is my fav. food.
          </summary>
          <span className="selection:bg-indigo-500 selection:text-white">
            김치
          </span>
        </details>
        <ul className="list-decimal marker:text-teal-500">
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
        </ul>
        <div>
          <input
            type="file"
            className="file:cursor-pointer file:hover:text-purple-400 file:hover:border-purple-400 file:hover:border transition-colors file:border-0 file:px-5 file:text-white file:rounded-lg file:bg-purple-400"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Home;
