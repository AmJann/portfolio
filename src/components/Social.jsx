import React from 'react'
import github from '../images/githubIconBlackAndWhite.png'
import linkedin from '../images/linkedinMauve.png'
import resumeIcon from '../images/resumeIcon.png'
import resume from '../images/Amber-J-March2024t.pdf'
import'../css/socialLinks.css'
import { Link } from 'react-router-dom'

function Social() {
  return (
    <div className='header'>
    <div className='socialLinks'>
        <Link target="_blank" rel="noreferrer" to='https://github.com/AmJann'><img alt ="github" className='socialButton' src={github}></img></Link>
        <Link target="_blank" rel="noreferrer" to='https://www.linkedin.com/in/amber-jankowski/'><img alt ="linked in" className='socialButton' src={linkedin}></img></Link>
        <Link target="_blank" rel="noreferrer" to={resume}><img alt ="resume" className='socialButton' src={resumeIcon}></img></Link>
    </div>
    <div className='title'>
    <div>
            <h1 className='abril-fatface-regular fontSizeTitleName'>Amber Jankowski</h1>
    </div>
        <div>
            <h3 className='lato-regular fontSizeTitle'>Software engineer</h3>
        </div>
        </div>
    </div>
  )
}

export default Social