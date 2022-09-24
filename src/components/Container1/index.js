import './index.css'

const Container1 = () => (
  <div className="brochure-container">
    <div className="ready-container">
      <div className="get-ready">
        <h1 className="ready">Get Ready to be a Global CA</h1>
        <p className="ready-desp ">
          Acquire the ACCA qualification to join the league of Global Accounting
          & Finance Professionals
        </p>
      </div>

      <div className="button-container get-ready">
        <button type="button" className="button">
          Download Brochure
        </button>
        <img
          alt="logo"
          className="logo"
          src="https://il-app.s3.ap-south-1.amazonaws.com/images/acca_silver_lp_logo.png"
        />
      </div>
    </div>
    <div className="input-container">
      <p className="input-heading">
        Aspiring to be an ACCA? Get in touch with us!
      </p>
      <input type="text" className="email-input-field" placeholder="Email ID" />
      <input
        type="text"
        className="email-input-field"
        placeholder="Phone Number"
      />
      <button className="callback-button" type="button">
        Request Call Back
      </button>
    </div>
  </div>
)

export default Container1
