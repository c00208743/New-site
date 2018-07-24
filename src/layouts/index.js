import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Jamie Murphy Website"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1000,
        padding: '0px 2rem 2rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>

    <Footer>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
      }}
    >
    </div>
    </Footer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
