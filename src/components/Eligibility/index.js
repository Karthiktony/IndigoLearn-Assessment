import {TiTick} from 'react-icons/ti'

import './index.css'

const Eligibility = () => (
  <div className="eligibility">
    <div>
      <h1 className="eligibility-text">ACCA - Eligibility</h1>
    </div>
    <div className="underline"></div>
    <div className="xy-conatiner">
      <p className="appear-text">
        To appear for the ACCA course examination a candidate should have
      </p>
      <div className="appear">
        <TiTick />
        <p className="qualified">Qualified the 10+2 exams</p>
      </div>
      <div className="appear x-appear">
        <TiTick />
        <p className="qualified">
          An aggregate of 65% in Mathematics / Accounts and English and a
          minimum of 50% in other subjects
        </p>
      </div>
    </div>
  </div>
)

export default Eligibility
