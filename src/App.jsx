import { useState } from 'react'
import TopNav from './components/TopNav'
import Featured from './components/Featured'
import Delivery from './components/Delivery'
import TopPicks from './components/TopPicks'
import Meals from './components/Meals'
import Categories from './components/Categories'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopNav/>
      <Featured/>
      <Delivery/>
      <TopPicks/>
      <Meals/>
      <Categories/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default App
