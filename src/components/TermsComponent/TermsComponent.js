import React from 'react';
import './TermsComponent.css';

class TermsComponent extends React.Component {
  state = {
    term: '',
    definition: '',
  };

  onClickButton1 = () => {
    this.setState({
      term: 'Business Enterprise Information Services (BEIS)',
      definition:
        'An organization in DoD that delivers enterprise business services to enable effective financial management throughout DoD.',
    });
  };

  onClickButton2 = () => {
    this.setState({
      term: 'Government-wide Financial Reporting System (GFRS)',
      definition:
        "A system that captures each agency's closing package information, links the agencies' comparative, audited, consolidated, department-level financial statements to the financial report, and resolves material deficiencies identified by the Government Accountability Office (GAO).",
    });
  };

  onClickButton3 = () => {
    this.setState({
      term: "Federal Agencies' Centralized Trial Balance System (FACTS)",
      definition:
        'System maintained by Treasury that collects proprietary United States Standard General Ledger (USSGL) account balance information, and uses it to produce the government-wide consolidated financial statement.',
    });
  };

  onClickButton4 = () => {
    this.setState({
      term: "Federal Agencies' Centralized Trial Balance Systems (FACTS II)",
      definition:
        'System maintained by Treasury that collects budget execution data used to produce the government-wide consolidated financial statement.',
    });
  };

  onClickButton5 = () => {
    this.setState({
      term: 'Standard Financial Information Structure (SFIS)',
      definition:
        "DoD's standard for categorizing financial information to support financial management and reporting functions.",
    });
  };

  render() {
    return (
      <div className='terms-container-row'>
        <div className='definition-container'>
          <p>{this.state.term}</p>
          <p>{this.state.definition}</p>
        </div>
        <div className='terms-container-column'>
          <button className='terms-button' onClick={this.onClickButton1}>
            Business Enterprise Information Services (BEIS)
          </button>
          <button className='terms-button' onClick={this.onClickButton2}>
            Government-wide Financial Reporting System (GFRS)
          </button>
          <button className='terms-button' onClick={this.onClickButton3}>
            Federal Agencies' Centralized Trial Balance System (FACTS)
          </button>
          <button className='terms-button' onClick={this.onClickButton4}>
            Federal Agencies' Centralized Trial Balance Systems (FACTS II)
          </button>
          <button className='terms-button' onClick={this.onClickButton5}>
            Standard Financial Information Structure (SFIS)
          </button>
        </div>
      </div>
    );
  }
}

export default TermsComponent;
