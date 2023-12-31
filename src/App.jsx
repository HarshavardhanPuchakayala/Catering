import React, { useEffect } from 'react'
import Header from "./componets/Header"
import MainContainer from "./componets/MainContainer"
import CreateContainer from './componets/CreateContainer'
import { Routes,Route} from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import { useStateValue } from './context/StateProvider'
import { getAllFoodItems } from './Utils/firebaseFunctions'
import { actionType } from './context/reducer'
import Footer from "./componets/Footer"
export default function App() {
const[{foodItems},dispatch]=useStateValue();

const fetchData =async () =>{
  await getAllFoodItems().then((data)=>{
     dispatch({
      type: actionType.SET_FOOD_ITEMS,
      foodItems: data,
     })
  })
}
useEffect(()=>{
  fetchData()
},[])
  return (
    <>
    <AnimatePresence >
        <div className="w-screen h-auto flex flex-col">
        <Header/>
        <main className="mt-16 md:mt-24 p-8 w-full">
          
          <Routes>
            <Route path="/" element={<MainContainer/>}/>
            <Route path="/createItem" element={<CreateContainer/>}/>
          </Routes>
        </main>
        <Footer/>
        </div>
  </AnimatePresence>
    </>
  )
}
