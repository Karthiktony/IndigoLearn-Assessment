import {
  MdLaptop,
  MdOutlinePeople,
  MdOutlinePersonOutline,
  MdThumbUp,
  MdOutlineFileCopy,
  MdTimer,
  MdVerifiedUser,
  MdPeople,
} from 'react-icons/md'

import {IoBulbOutline, IoBriefcaseOutline, IoBulbSharp} from 'react-icons/io5'

import {BsDisplay, BsBag} from 'react-icons/bs'

import './index.css'

const WhyACCA = () => (
  <div className="why-container">
    <div>
      <h1 className="why-is-Acca">Why ACCA @ 1FIN?</h1>
    </div>
    <div className="ul-1 underline"></div>
    <div className="three-container">
      <div className="single-container">
        <div className="top-container highlight">
          <IoBulbSharp className="concept-icon" />
          <p className="concept-icon-text">Conceptual</p>
        </div>
        <div className="concept">
          <div className="main">
            <MdLaptop className="bottom-icons" />
            <p>Regular Live Classes</p>
          </div>
          <div className="main">
            <MdOutlinePeople className="bottom-icons" />
            <p>Expert Faculty</p>
          </div>
          <div className="main">
            <IoBriefcaseOutline className="bottom-icons" />
            <p>Exam Oriented Content</p>
          </div>
          <div className="main">
            <BsDisplay className="bottom-icons" />
            <p>Dedicated Discussions Forms</p>
          </div>
          <div className="main">
            <MdOutlinePersonOutline className="bottom-icons" />
            <p>Continous Support</p>
          </div>
        </div>
      </div>
      <div className="single-container">
        <div className="top-container highlight">
          <MdPeople className="concept-icon" />
          <p className="concept-icon-text">Comprehensive</p>
        </div>
        <div className="concept">
          <div className="main">
            <MdLaptop className="bottom-icons" />
            <p>Exhaustive Q & A Bank</p>
          </div>
          <div className="main">
            <IoBriefcaseOutline className="bottom-icons" />
            <p>1000s of MCQs for practice</p>
          </div>
          <div className="main">
            <MdTimer className="bottom-icons" />
            <p>Tests at regular intervals</p>
          </div>
          <div className="main">
            <MdOutlineFileCopy className="bottom-icons" />
            <p>Mock Exams</p>
          </div>
          <div className="main">
            <IoBulbOutline className="bottom-icons" />
            <p>Analysis of Answer Sheets</p>
          </div>
        </div>
      </div>
      <div className="single-container">
        <div className="top-container highlight">
          <MdVerifiedUser className="concept-icon" />
          <p className="concept-icon-text">Career Oriented</p>
        </div>
        <div className="concept">
          <div className="main">
            <IoBriefcaseOutline className="bottom-icons" />
            <p>Business Communication</p>
          </div>
          <div className="main">
            <BsBag className="bottom-icons" />
            <p>Resume Building</p>
          </div>
          <div className="main">
            <MdThumbUp className="bottom-icons" />
            <p>Negotiation Skills</p>
          </div>
          <div className="main">
            <MdLaptop className="bottom-icons" />
            <p>Mock Interviews</p>
          </div>
          <div className="main">
            <BsDisplay className="bottom-icons" />
            <p>Placement Services</p>
          </div>
        </div>
      </div>
    </div>
    <p className="live">
      Live classes start from late September, 2022.
      <span> Click here to Enrol Now.</span>
    </p>
    <img
      alt="logo"
      className="my-icon"
      src="https://il-app.s3.ap-south-1.amazonaws.com/images/acca_silver_lp_logo.png"
    />
  </div>
)

export default WhyACCA
