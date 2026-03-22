import React from 'react'
import chef from '../assets/chef.svg'
const Header = () => {
  return (
    <div className='header'>
        <img className='chefimg' src={chef} alt="chef-image" />
      <h2>Chef Claude</h2>
    </div>
  )
}

export default Header
