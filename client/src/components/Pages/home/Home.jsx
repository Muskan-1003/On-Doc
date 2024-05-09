import React from 'react'
import Navbardefault from './Navbar'

import Banner from './Banner'
import Buttons from './Buttons'
import Categories from "./Categories.jsx"

const Home = () => {
  return (
    <div>
      <Navbardefault />
      <Banner />
      <Buttons />
      <Categories />
    </div>
  )
}

export default Home
