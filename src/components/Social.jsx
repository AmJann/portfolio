import React from 'react'
import github from '../images/githubPink.png'
import linkedin from '../images/linkedinMauve.png'
import resumeIcon from '../images/resumeIcon.png'
import resume from '../images/Amber-J-March2024t.pdf'
import'../css/socialLinks.css'
import { Link } from 'react-router-dom'

function Social() {
  return (
    <div className='socialLinks'>
        <Link target="_blank" rel="noreferrer" to='https://github.com/AmJann'><img className='socialButton' src={github}></img></Link>
        <Link target="_blank" rel="noreferrer" to='https://www.linkedin.com/in/amber-jankowski/'><img className='socialButton' src={linkedin}></img></Link>
        <Link target="_blank" rel="noreferrer" to={resume}><img className='socialButton' src={resumeIcon}></img></Link>
    </div>
  )
}

export default Social