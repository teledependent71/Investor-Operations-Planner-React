import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Investor Operations Planner</title>
        <meta property="og:title" content="Investor Operations Planner" />
      </Helmet>
    </div>
  )
}

export default Home
