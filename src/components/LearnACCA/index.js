import './index.css'

const LearnACCA = () => (
  <div className="learn-container">
    <div>
      <h1 className="learning-text">What will you Learn in ACCA?</h1>
    </div>
    <div className="underline ul-3"></div>
    <div className="three-container">
      <div className="single-container1">
        <div className="top-container highlight">
          <p className="price-heading">Knowledge Level</p>
        </div>
        <div className="btm-cont">
          <ul>
            <li className="li-li">Business and Technology (BT)</li>
            <li className="li-li">Management Accounting (MA)</li>
            <li className="li-li">Financial Accounting (FA)</li>
          </ul>
          <button className="enrol-button btn-1">Enroll Now</button>
        </div>
      </div>
      <div className="single-container1">
        <div className="top-container highlight">
          <p className="price-heading">Skill Level</p>
        </div>
        <div className="btm-cont">
          <ul>
            <li className="li-li">Corporate and Business Law (LW)</li>
            <li className="li-li">Performance Management (PM)</li>
            <li className="li-li">Taxation (TX)</li>
            <li className="li-li">Financial Reporting (FR)</li>
            <li className="li-li">Audit and Assurance (AA)</li>
            <li className="li-li">Financial Management (FM)</li>
          </ul>
          <button className="enrol-button btn-2">Enroll Now</button>
        </div>
      </div>
      <div className="single-container1">
        <div className="top-container highlight">
          <p className="price-heading">Professional Level</p>
        </div>
        <div className="btm-cont">
          <p className="comp-text">Compulsory</p>
          <ul>
            <li className="li-li">SBL - Strategic Business Leader</li>
            <li className="li-li">SBR - Strategic Business Reporting</li>
          </ul>
          <p>Two out of the following</p>
          <ul>
            <li className="li-li">Advanced Financial Management (AFM) </li>
            <li className="li-li">Advanced Performance Management (APM)</li>
            <li className="li-li">Advanced Taxation (ATX)</li>
            <li className="li-li">Advanced Audit and Assurance (AAA)</li>
          </ul>
          <button className="enrol-button">Enroll Now</button>
        </div>
      </div>
    </div>
  </div>
)

export default LearnACCA
