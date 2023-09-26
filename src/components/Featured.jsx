import React , {useState} from 'react'
import {BsChevronCompactLeft , BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
const Featured = () => {
    const sliders = [
      {
        url: 'https://i.imgur.com/y13qeSP.jpg',
      },
      {
        url: 'https://i.imgur.com/dc2jDYM.jpg',
      },
      {
        url: 'https://i.imgur.com/yXy0Tro.jpg',
      },
    ]
    const [currentIndex , setCurrentIndex]= useState(0);
    const prevSlider = ()=>{
        const newItem = currentIndex === 0 ? sliders.length -1 : currentIndex -1;
        setCurrentIndex(newItem)
    }
    const nextSlider = ()=>{
        const newItem = currentIndex === sliders.length - 1 ? 0 : currentIndex + 1 
        setCurrentIndex(newItem)
    }
    // const [sliderIndex , setSliderIndex] = useState(0);
    
    console.log(currentIndex);
  return (
    <div className="max-width-[1520px] h-[600px] w-full p-4 relative group">
      <div
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <div
        className="hidden group-hover:block absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white font-bold cursor-pointer"
        onClick={nextSlider}
      >
        <BsChevronCompactRight size={25} />
      </div>
      <div
        className="hidden group-hover:block absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white font-bold cursor-pointer"
        onClick={prevSlider}
      >
        <BsChevronCompactLeft size={25} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {
            sliders.map((sliderItem,sliderIndex)=>{
               return (
                 <div
                   className="text-2xl cursor-pointer" key={sliderIndex}
                   onClick={() => {
                     setCurrentIndex(sliderIndex)
                   }}
                 >
                   <RxDotFilled
                     onClick={() => setCurrentIndex(sliderIndex)}
                     className={
                       currentIndex === sliderIndex ? 'text-orange-500' : null
                     }
                   />
                 </div>
               )
            })
        }
      </div>
    </div>
  )
}

export default Featured