import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <div
    style={{
      background: '#333333',

    }}
  >
    <div
      style={{
        margin: '0',
        padding: '1rem 1rem',
      }}
    >
      <h5 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#64D35D',
            textDecoration: 'none',
          }}
        >
          This site is developed in React by Jamie Murphy, student of the
          Institute of Technologly Carlow.
        </Link>
      </h5>
    </div>
  </div>
)

export default Footer
