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

  <section id="work">
    <h2>Work</h2>
    <h3>Software Intern  •  ReInvent Software   •   March 2018 - Present</h3>
    <p>• Involved in the development and maintenance of a clients Shopify website.</p>
    <p>• Developed python scripts to interprete .xls files that contained client’s product list’s to create a database.</p>
    <p>• Grew a knowlegde of the best methods to build website and mobile applications using React and React native respectfully.</p>
  </section>

  <section id="education">
    <h2>Education</h2>
    <h3>Institute of Technologly Carlow</h3>
    <p>Bachelor of Science, Computer Games Development  •  Co. Carlow Ireland  •  Currently</p>
      <hr></hr>
    <h3>Blackrock Institute of Further Education</h3>
    <p>QQI Level 5 Games Design & Development  •  Co. Dublin Ireland  •  2014/15</p>
  </section>

  <section id="skills">
    <h2>Skills</h2>
    <p>Programming languges</p>
    <p>Worked primarily with JavaScript, Python and C++ in college.</p>
    <p>Interested in building React websites and scapable mobile applications</p>
    <p>DataBases used</p>
    <p>Look up how to change the domain</p>

  </section>

  <section id="app">
    <h2>Applications Used</h2>
    <div id="appRow">
      <img src={GatsbyImg} ></img>
      <img src={ReactImg} ></img>
      <img src={NetlifyImg} ></img>
      <img src={AtomyImg} ></img>
      <img src={ReactNativeImg} ></img>
      <img src={ExpoImg} ></img>
      <img src={MicrosoftVSImg} ></img>
      <img src={UnityImg} ></img>
    </div>
  </section>

  </div>

)

export default IndexPage
