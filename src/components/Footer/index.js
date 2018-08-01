import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <div
    style={{
      background: '#2B7A7B',

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
            color: '#17252A',
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
