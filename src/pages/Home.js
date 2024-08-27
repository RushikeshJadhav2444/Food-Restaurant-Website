import React from 'react'
import Layout from '../component/Layout/Layout'
import {Link} from 'react-router-dom'
import Banner from '../images/banner.jpeg'
import  '../styles/HomeStyle.css' 
const Home = () => {
  return (
    <div>

        <Layout> 
          <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
            <div className="headerContainer">
            <h1>RUSHI RUSH</h1>
            <p>Best Food In India</p>
            <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>


            </div>
          </div>
        </Layout>
    </div>
  )
}

export default Home