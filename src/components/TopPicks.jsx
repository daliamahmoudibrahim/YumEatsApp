import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
 import {topPicks} from '.././data/data'


const TopPicks = () => {
  return (
    <>
      <h1 className=" hidden lg:block text-orange-500 font-bold text-2xl text-center py-2">
        Top Picks
      </h1>
      <div className="hidden lg:flex max-w-[1520] m-auto p-2">
        <Splide
          options={{ perPage: 4, gap: '0.5rem', drag: 'free', arrows: false }}
        >
          {topPicks.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <div className="rounded-3xl relative">
                  <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white">
                    <p className="px-2 pt-4 font-bold text-2xl">{item.title}</p>
                    <p className="px-2">{item.price}</p>
                    <button className="border-dotted border-white bg-transparent  p-4 text-white rounded-3xl absolute mx-2 bottom-4">
                      Add To Cart
                    </button>
                  </div>
                  <img
                    className="h-[200px] w-full object-cover rounded-3xl cursor-pointer"
                    src={item.img}
                    alt={item.title}
                  />
                </div>
              </SplideSlide>
            )
          })}
        </Splide>
      </div>
    </>
  )
}

export default TopPicks