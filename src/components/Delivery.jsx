import React from 'react'

const Delivery = () => {
  return (
    <div className="w-full py-16 px-4">
      <h3 className="text-orange-500 font-bold text-2xl text-center">
        Quick Delivery App
      </h3>
      <div className="w-[90%] mx-auto grid md:grid-cols-2">
        <img
          src="https://www.pngmart.com/files/7/Delivery-PNG-Image.png"
          className="w-[550px] my-4 "
        />
        <div className="flex flex-col justify-center ">
          <p className="text-[#f58611] font-bold">Get The App</p>
          <h1 className="md:text-4xl sm:text-3xl font-bold py-2 ">
            Limitless Convenience on-demand
          </h1>
          <p className='w-[80%]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
            voluptate reprehenderit dolore autem cum ullam sed odit
            perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className="bg-black text-[#f58611]  w-[200px] rounded-md font-medium my-6 md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Delivery