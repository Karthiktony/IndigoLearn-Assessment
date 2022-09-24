import {MdDateRange, MdLaptop} from 'react-icons/md'

import {BsBookHalf, BsStopwatch} from 'react-icons/bs'

import './index.css'

const WhatACCA = () => (
  <div className="what-conatiner">
    <h1 className="what-is-Acca">What is ACCA?</h1>
    <div className="underline"></div>
    <div className="list-cont">
      <ul className="li-item">
        <li className="li-item">
          ACCA (Association of Chartered Certified Accountants) is a globally
          recognized accounting qualification offered by ACCA Global, UK
        </li>
        <li className="li-item">
          It provides unlimited career opportunities with MNCs and Big4s
        </li>
        <li className="li-item">
          A course which you can complete along with your graduation
        </li>
        <li className="li-item li-items">
          It has 2 lakh + members & 5 lakh + students across 180+ countries
        </li>
      </ul>
    </div>
    <div className="box-container">
      <div className="box">
        <p className="box-heading">Levels</p>
        <div className="level">
          <BsBookHalf className="level-icon" />
          <p>Three(13 papers)</p>
        </div>
      </div>
      <div className="box">
        <p className="box-heading">Duration</p>
        <div className="level">
          <BsStopwatch className="level-icon" />
          <p>6-30 months</p>
        </div>
      </div>
      <div className="box">
        <p className="box-heading">Exams</p>
        <div className="level">
          <MdLaptop className="level-icon" />
          <p>Quarterly (Online)</p>
        </div>
      </div>
      <div className="box">
        <p className="box-heading">Exemptions</p>
        <div className="level">
          <MdDateRange className="level-icon" />
          <p>Available</p>
        </div>
      </div>
    </div>
  </div>
)

export default WhatACCA
