import {AiOutlineMenu} from 'react-icons/ai'

import {BsPersonCircle} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <div className="container">
    <div className="indigo">
      <AiOutlineMenu className="line" />
      <p>IndigoLearn</p>
    </div>
    <p>BUY COARSES</p>
    <p>PROGRAMS</p>
    <p>SCHOLARSHIPS</p>
    <p>FREE RESOURCES</p>
    <button type="button" className="login-button">
      <BsPersonCircle className="profile" />
      Login/Sign Up
    </button>
  </div>
)

export default Header
