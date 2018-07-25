import React from 'react'
import Link from 'gatsby-link'
import img from '../../assets/computer.jpg'

const Header = () => (
  <div
    style={{
      //background: '#2B2B2B',
      marginBottom: '2rem',
      background: `url(${img})`,
      backgroundSize: 'cover',


    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        minHeight: 650,
        padding: '0.5rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Jamie Murphy
        </Link>
      </h1>
      <h3 style={{ color: 'white' }}>Student Software Developer</h3>

        <hr></hr>

    </div>
  </div>
)

export default Header
