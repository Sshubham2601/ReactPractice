import { useState } from "react"


function App() {
const [color,setColor]=useState("olive");
  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor:color}}
   >
    <div className="  fixed flex flex-wrap inset-x-0 px justify-center px-3 bottom-12">
    <div className=" w-1/2  flex flex-wrap shadow-lg  bg-slate-100 justify-center rounded-3xl px-3 py-2 gap-3 ">
      <button className=" outline-none text-white px-4 py-1 rounded-full shadow-sm" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
      <button className=" outline-none text-white px-4 py-1 rounded-full shadow-sm" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
      <button className=" outline-none text-white px-4 py-1 rounded-full shadow-sm" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
      <button className=" outline-none text-black px-4 py-1 rounded-full shadow-sm" style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>White</button>
      <button className=" outline-none text-black px-4 py-1 rounded-full shadow-sm" style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>

    </div>
    </div>
   </div>
  )
}

export default App
