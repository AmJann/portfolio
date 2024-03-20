import React from 'react'
import '../css/skills.css'

function Skills() {
  return (
    <div>
        <div>
            <h3 className='abril-fatface-regular skillsTitle'>Skills</h3>
        </div>
        <div className='skillsContainer'>
    <h3 className='lato-regular'><span className='abril-fatface-regular'>Languages</span> - JavaScript, HTML, CSS, Python, SQL, Mongo, JSON, EJS</h3>
<h3 className='lato-regular'><span className='abril-fatface-regular'>Database</span> - PostgreSQL, MongoDB | <span className='abril-fatface-regular'>Other</span> - RESTful Routing, JSON api, Node.js</h3>
<h3 className='lato-regular'><span className='abril-fatface-regular'>Libraries and Frameworks</span> - React, Redux, Vite, Express.js, Django, Flask</h3>
        </div>
    </div>
  )
}

export default Skills