import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (

  <div>
    <h1>Hi Jamie</h1>
    <p>What ideas do you have for this website Jamie?</p>
    <ul>
      <li>Clock</li>
      <li> know</li>
      <li>dont know</li>
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
    <div>
    </div>
    <Link to="/counter/">Counter</Link>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <div>
    </div>

    <button>Click me</button>

    <div>
    </div>

    <form>
      <p>First name:</p>
      <input type="text" name="firstname" ></input>

      <p>Last name:</p>
      <input type="text" name="lastname" ></input>

      <input type="submit" value="Submit"></input>

    </form>

  </div>

)




export default IndexPage
