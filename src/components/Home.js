import { Button } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      
      <Link to={'/Grocery'}><button>Grocery</button></Link>
      <Link to={'/Fpo'}><button>FPO</button></Link>
    </div>
  )
}

export default Home
