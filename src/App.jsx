import './App.css'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import { useState } from 'react'

function App() {

  const [totalBalance, setTotalBalance] = useState(0);

  const handleTotalBalance = (amount) => {
    setTotalBalance(totalBalance + amount);
    console.log(totalBalance);
  };

  return (
    <>
      <NavBar totalBalance = {totalBalance}></NavBar>
      <Banner handleTotalBalance = {handleTotalBalance}></Banner>
    </>
  )
}

export default App
