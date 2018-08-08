import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <div id="nav"
    style={{
      margin: '0',
    }}
  >
    <div
      style={{
        margin: 'auto',
        maxWidth: 960,
        minHeight: 35,
        padding: '1rem 1rem',
      }}
    >

      <a href="#work" id="navA">Work</a>

      <a href="#education" id="navA">Education</a>

      <a href="#skills" id="navA">Skills</a>

      <a href="#assets" id="navA">Assets Used</a>

    </div>
</div>
)

export default Navbar
