
import './App.css'
import Card from './Component/Card'
function App() {
  let Myobj={
    userName:"Kranti",
    age:23
  }
  
  return (
    <>
         <h1 className="text-3xl font-bold  bg-green-400 rounded-sm mb-3">Hello world!
    </h1>
   
     <Card userName="Chaiaurcode"  />
     <Card userName="Krantikarii" />
    </>
  )
}

export default App
