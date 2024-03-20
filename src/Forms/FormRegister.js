import React from "react";

function FormRegisterIphone(props) {
  const { handleToggle } = props;
  return (
    <div className="img justify-center items-center flex bg-gray-600 h-lvh">
      <div className="w-3/12 bg-slate-200 pb-14 rounded-lg inset-0 bg-opacity-70 shadow relative">
        <div className=" right-0 absolute bg-gray-700 text-white rounded-tr-lg rounded-bl-lg w-7 h-7 justify-center items-center flex cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className=" flex justify-center items-center">
          <form className=" space-y-10">
            <label className="justify-center items-center flex text-3xl font-semibold mt-8">
              Registation
            </label>
            <label className="border-gray-600 border-b-2 py-1 flex">
              <input
                type="text"
                placeholder="Username"
                className=" bg-slate-200 inset-0 bg-opacity-5 focus:outline-none w-72 px-1 placeholder:text-gray-500 text-gray-700 text-md 
                "
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 pr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </label>
            <label className="border-gray-600 border-b-2 py-1 flex">
              <input
                type="text"
                placeholder="Email"
                className=" bg-slate-200 inset-0 bg-opacity-5 focus:outline-none w-72 px-1 placeholder:text-gray-500 text-gray-700 text-md 
                "
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 pr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </label>
            <div className=" space-y-3">
              <label className="border-gray-600 border-b-2 py-1 flex">
                <input
                  type="password"
                  placeholder="Password"
                  className=" bg-slate-200 inset-0 bg-opacity-5 focus:outline-none w-72 px-1 placeholder:text-gray-500 text-gray-700 text-md 
                  "
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 pr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </label>
              <div className=" flex justify-between items-center">
                <label className=" flex items-center justify-center space-x-1">
                  <input type="checkbox" />{" "}
                  <p className=" text-base font-semibold text-gray-700">
                    I agree to the terms & conditions
                  </p>
                </label>
              </div>
              <div className=" pt-3 flex justify-center items-center">
                <button
                  type="button"
                  className="shadow rounded  w-full py-2 bg-gray-700  text-white"
                >
                  Register
                </button>
              </div>
              <div className="pt-2 flex justify-center items-center">
                <p className=" text-base font-semibold text-gray-700">
                  {" "}
                  Already have an account?
                  <span className=" cursor-pointer" onClick={handleToggle}>
                    {" "}
                    Login
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormRegisterIphone;
