import React from 'react'
import  Head  from './Head'
import  Navbar from './Navbar'
import Search  from './Search'
import "./Header.css"

export const Header = ({cartItem}) => {
  /* to show the items added in cart icon on header */
  return (
    <>
        <Head/>
        <Search cartItem={cartItem}/> 
        <Navbar/>
        
        
    </>
  )
}
