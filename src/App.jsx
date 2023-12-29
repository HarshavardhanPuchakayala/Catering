import React from 'react'
import Header from "./componets/Header"
import MainContainer from "./componets/MainContainer"
import CreateContainer from "./componets/CreateContainer"
import { Routes,Route} from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
export default function App() {
  return (
    <>
    <AnimatePresence>
        <div className="w-screen h-auto flex flex-col">
        <Header/>
        <main className="mt-24 p-8 w-full">
          
          <Routes>
            <Route path="/" element={<MainContainer/>}/>
            <Route path="/createItem" element={<CreateContainer/>}/>
          </Routes>
        </main>
        </div>
  </AnimatePresence>
    </>
  )
}
