import React from 'react'
import Navbar from './components/Navbar'
import Container from './components/Container'

const App = () => {
  let arr =[];
  for(let i=1;i<=100;i++){
    arr.push(i);
  }
  return (
    <>
      <Navbar/>
      {arr.map((value,index)=> {
        return <Container/>;
      })};
    </>
  )
}

export default App
