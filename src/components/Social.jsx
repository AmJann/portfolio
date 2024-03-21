import React from 'react'

import resume from '../images/Amber-J-March2024.pdf'
import'../css/socialLinks.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';


function Social() {
  return (
    <div className='header'>
    <div className='socialLinks'>
        <Link target="_blank" rel="noreferrer" to='https://github.com/AmJann'><FontAwesomeIcon className='socialButton' icon={faGithub} /></Link>
        <Link target="_blank" rel="noreferrer" to='https://www.linkedin.com/in/amber-jankowski/'><FontAwesomeIcon className='socialButton' icon={faLinkedin} /></Link>
        <Link target="_blank" rel="noreferrer" to={resume}><FontAwesomeIcon className='socialButton' icon={faFile} /></Link>
    </div>
    <div className='title'>
    <div>
            <h1 className='abril-fatface-regular fontSizeTitleName'>Amber Jankowski</h1>
    </div>
        <div>
            <h3 className='montserrat-alternates-medium fontSizeTitle'>Software engineer</h3>
        </div>
        </div>
    </div>
  )
}

export default Social