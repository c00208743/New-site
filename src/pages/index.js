import React from 'react'
import Link from 'gatsby-link'
import video_url from 'assets/Lucas.mp4'

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

    <button id="one">Click me</button>

    <div>
    </div>

    <button id="two">Click me 2</button>

    <div>
    </div>

    <video width="320" height="240" controls data-title="The Video Title" onpause="sendPause()" onplay="sendPlay()" onended="sendEnded()">
      <source src={video_url} type="video/mp4"></source>
    </video>

    function sendPause()
  {
          ga('send', 'event', 'Video', 'pause', 'Lucas')
  }
  function sendPlay()
  {
          ga('send', 'event', 'Video', 'play', 'Lucas')
  }
  function sendEnded()
  {
        ga('send', 'event', 'Video', 'ended', 'Lucas')
  }

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
