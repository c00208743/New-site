import React from 'react'
import Link from 'gatsby-link'
import img from '../../assets/computer.jpg'
import Icon from 'react-icons-kit'
import {mail4} from 'react-icons-kit/icomoon/mail4'
import {github} from 'react-icons-kit/icomoon/github'
import {linkedin} from 'react-icons-kit/icomoon/linkedin'

const Header = () => (
  <div
    style={{
      background: `url(${img})`,
      backgroundSize: 'cover',

    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        minHeight: 635,
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

      <div
        style={{
          margin: '0 auto',
          maxWidth: 200,
          paddingTop: 0,
        }}
      >
        <a href="https://www.w3schools.com/html/" style={{ padding: '5px' }}><Icon icon={mail4} size={50}/></a>
        <a href="https://github.com/c00208743"style={{ padding: '5px' }}><Icon icon={github} size={50}/></a>
        <a href="https://www.linkedin.com/in/jamie-murphy-a99798151/" style={{ padding: '5px' }}><Icon icon={linkedin} size={50}/></a>
      </div>


    </div>
  </div>
)

export default Header
