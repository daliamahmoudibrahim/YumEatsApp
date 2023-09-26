import React ,{useState} from 'react'
// import ArrowSmRightIcon from '../../node_modules/@heroicons/react/outline/ArrowSmRightIcon'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {mealData} from '.././data/data'
const Meals = () => {
    let [foods , setFoods] = useState(mealData);
    let filterCat =(category)=>{
        let newFoods = mealData.filter((item) => {
          return item.category === category
        })
        setFoods(newFoods);
    }
  return (
    <div className="w-[100%]  py-12">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-4">
        Our Meal
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex justify-center md:justify-center">
          <button
            onClick={() => setFoods(mealData)}
            className="m-1 p-2 rounded-xl bg-orange-700 text-white border-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 "
          >
            All
          </button>
          <button
            onClick={() => filterCat('pizza')}
            className="m-1 p-2 rounded-xl bg-orange-700 text-white border-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 "
          >
            Pizza
          </button>
          <button
            onClick={() => filterCat('chicken')}
            className="m-1 p-2 rounded-xl bg-orange-700 text-white border-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 "
          >
            Chicken
          </button>
          <button
            onClick={() => filterCat('salad')}
            className="m-1 p-2 rounded-xl bg-orange-700 text-white border-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 "
          >
            Salad
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 ">
        {foods.map((meal) => {
          return (
            <div
              key={meal.id}
              className="border-none hover:scale-90 duration-300"
            >
              <img
                src={meal.image}
                alt={meal.name}
                className="w-full h-[250px] object-cover rounded-lg"
              />
              <div className="flex justify-between py-2 px-4">
                <p className="font-bold text-2xl">{meal.name}</p>
                <p className="bg-orange-700 text-white w-18 h-18 p-4 rounded-full  -mt-10 border-8">
                  {meal.price}
                </p>
              </div>

              <div className="pl-4 py-4 -mt-5">
                <p className="flex items-center text-[#e58b05]">
                  View More <AiOutlineArrowRight size={20} />
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Meals