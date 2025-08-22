import './App.css'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import { useState } from 'react'
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {

  //Total Balance 
  const [totalBalance, setTotalBalance] = useState(0);

  const handleTotalBalance = (amount) => {
    setTotalBalance(totalBalance + amount);
    console.log(totalBalance);
  };



  return (
    <>
      <NavBar totalBalance = {totalBalance}></NavBar>
      <Banner handleTotalBalance = {handleTotalBalance}></Banner>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App
