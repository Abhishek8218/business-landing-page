

const Hero = () => {
  return (
   
  <section
    className=" relative bg-[url(https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  bg-center bg-no-repeat bg-cover  "
  >
    <div
      className="absolute inset-0 sm:bg-transparent  "
    ></div>
  
    <div
      className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h1 className="text-3xl font-sans font-bold sm:text-5xl text-white">
          Let us find your
  
          <strong className="block font-sans font-bold text-[#526446]"> Forever Home. </strong>
        </h1>
  
        <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
          numquam ea!
        </p>
  
        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <a
            href="#"
            className="block w-full rounded bg-[#8aa27b] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#627754] focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          >
            Get Started
          </a>
  
          <a
            href="#"
            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-[#8aa27b] shadow hover:text-[#627754] focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero