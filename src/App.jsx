import { useEffect, useState } from 'react'

import './App.css'
import Watch from './component/Watch/Watch'
function App() {

  // const watches = [
  //   { name: "Rolex Submariner", id: 101, price: 8500 },
  //   { name: "Omega Seamaster", id: 102, price: 5200 },
  //   { name: "Tag Heuer Carrera", id: 103, price: 3200 },
  //   { name: "Audemars Piguet Royal Oak", id: 104, price: 25000 },
  //   { name: "Patek Philippe Nautilus", id: 105, price: 30000 }
  // ];

const [watches, setWatches] = useState([])

useEffect(()=>{
  fetch('Watches.json')
  .then(res=>res.json())
  .then(data=>setWatches(data))
} ,[])
  return (
    <>
      
      <h1>Vite + React</h1>
{
  watches.map(watch=> <Watch key={watch.id} watch={watch}>

  </Watch>)
}

    </>
  )
}

export default App
