import React from 'react'
import { FiShoppingCart, FiSearch, FiPhone, FiUser } from 'react-icons/fi'

import { Header } from './styles'

import logo from '../../../assets/img/logo.png'

import Categories from '../Categories'

export default function DesktopHeader () {
  return (
    <>
      <Header>
        <ul className="logo">
          <img src={logo} alt="ToBruxo"/>
        </ul>
        <ul className="search">
          <li><input type="text" placeholder="O que você procura?"/></li>
          <li><button><FiSearch /></button></li>
        </ul>
        <ul className="items">
          <li><FiShoppingCart size={23}/></li>
          <li><FiUser size={23}/></li>
          <li><FiPhone size={23}/></li>
        </ul>
      </Header>
      <Categories/>
    </>
  )
}
