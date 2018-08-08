import React from 'react'
import Link from 'gatsby-link'

import GatsbyImg from '../assets/gatsby.png'
import ReactImg from '../assets/React.svg.png'
import NetlifyImg from '../assets/netlify.png'
import AtomyImg from '../assets/Atom.svg.png'
import ReactNativeImg from '../assets/react-native.png'
import ExpoImg from '../assets/Expo.png'
import MicrosoftVSImg from '../assets/MicrosoftVS.png'
import UnityImg from '../assets/Unity.png'

const IndexPage = () => (

  <div>

  <section id="content">
    <h2 id="work">Work</h2>
    <h3>Software Intern  •  ReInvent Software   •   March 2018 - Present</h3>
    <p>• Involved in the development and maintenance of a clients Shopify website.</p>
    <p>• Developed python scripts to interprete .xls files that contained client’s product list’s to create a database.</p>
    <p>• Grew a knowlegde of the best methods to build website and mobile applications using React and React native respectfully.</p>
  </section>

  <section id="content">
    <h2 id="education">Education</h2>
    <h3>Institute of Technologly Carlow</h3>
    <p  id="college">Bachelor of Science, Computer Games Development  •  Co. Carlow Ireland  •  Currently</p>
      <hr></hr>
    <h3>Blackrock Institute of Further Education</h3>
    <p  id="college">QQI Level 5 Games Design & Development  •  Co. Dublin Ireland  •  2014/15</p>
  </section>

  <section id="content">
    <h2 id="skills">Skills</h2>
    <p>Programming languges</p>
    <p>Worked primarily with JavaScript, Python and C++ in college.</p>
    <p>Interested in building React websites and scapable mobile applications</p>

  </section>

  <section id="content">
    <h2 id="assets">Assets Used</h2>
    <div id="appRow">
      <a href="https://www.gatsbyjs.org/"><img src={GatsbyImg} ></img></a>
      <a href="https://reactjs.org/"><img src={ReactImg} ></img></a>
      <a href="https://www.netlify.com/"><img src={NetlifyImg} ></img></a>
      <a href="https://atom.io/"><img src={AtomyImg} ></img></a>
      <a href="https://facebook.github.io/react-native/"><img src={ReactNativeImg} ></img></a>
      <a href="https://expo.io/"><img src={ExpoImg} ></img></a>
      <a href="https://unity3d.com/"><img src={UnityImg} ></img></a>
    </div>
  </section>

  </div>

)

export default IndexPage
