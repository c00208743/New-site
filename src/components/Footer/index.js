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
        margin: '0 auto',
        maxWidth: 960,
        padding: '1rem 1.0875rem',
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
          <p>This site is developed in React by Jamie Murphy, student of the
          Institute of Technologly Carlow.</p>
        </Link>
      </h5>
    </div>
  </div>
)

export default Footer
