import React, { useState } from 'react'
import'./home.css'
import Header from '../../Components/header/header'
import ExploreMenu from '../../Components/exploreMenu/exploreMenu'
import FoodDisplay from '../../Components/foodDisplay/foodDisplay'
import AppDownload from '../../Components/appDownload/appDownload'

const Home = () => {

    const [category,setCategory]=useState('All')

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload/>

    
      </div>
  )
}

export default Home
