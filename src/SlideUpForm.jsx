import { useEffect, useState } from "react";

const SlideUpForm = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
      // Disable scrolling
    }, 3000);

    return () => {
      clearTimeout(timer);
      // Re-enable scrolling
    };
  }, []);

  const handleClose = () => {
    setShowForm(false);
    // Re-enable scrolling
  };

  return (
    <div className=" inset-0 flex items-center justify-center ">
      {showForm && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 "
            onClick={handleClose}
          ></div>
          <form
            className="fixed bottom-20 p-8 rounded-3xl bg-white  ml-4 w-[280.19px] sm:w-[507.19px] sm:h-[404px]"
          >
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 bg-gray-200 text-gray-600 rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-300 z-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Your form content here */}
            <div className="max-w-md mx-auto">
              <div className="flex flex-col justify-center items-center space-y-5">
                <h1 className="text-3xl text-[#526446] font-sans font-semibold text-balanced">Book Your Consultation</h1>
                <h2 className="text-2xl font-sans font-semibold text-[#f8cf1c]">Sign Up Now</h2>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-5 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" />
                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                  </div>
                  <div className="relative">
                    <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" />
                    <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                  </div>
                  <div className="relative">
                    <button className="bg-[#f9d22c] hover:bg-[#cea805]  text-white rounded-md px-4 py-2" onClick={handleClose}>Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default SlideUpForm;
