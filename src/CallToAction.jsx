

const CallToAction = () => {
    return (
     
  <section className="bg-white dark:bg-gray-600">
      <div className="relative px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
          <h2 className="text-2xl font-semibold font-display text-black dark:text-white sm:text-3xl">
              We&#x27;ve got more coming...
          </h2>
          <p className="mt-2 max-w-xl text-base text-gray-400">
              Want to hear from us about our new plans ? Sign up for our newsletter and we&#x27;ll email you every time we release some new plans.
          </p>
          <div>
              <div className="mt-6 sm:flex jusitfy-start">
                  <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                      <div className=" relative ">
                          <input type="text" id="&quot;form-subscribe-Subscribe" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email"/>
                          </div>
                          <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-[#f9d22c] rounded-lg shadow-md hover:hover:bg-[#cea805] focus:outline-none " type="submit">
                              Subscribe
                          </button>
                      </form>
                  </div>
              </div>
              <div className="absolute inset-y-0 right-0 hidden lg:block lg:left-2/3 xl:left-1/2 ">
                  
      
                              <img className="object-cover w-1/2 mx-auto maw-w-44 mt-6 rounded-lg  " src="https://plus.unsplash.com/premium_photo-1682309524785-cf2288f7b544?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="shopping item"/>
                      
                      </div>
                  </div>
              </section>
  
    )
  }
  
  export default CallToAction