import React, { useRef, useState, useEffect, useContext } from 'react';
import { Slide } from 'react-slideshow-image';
import { AppContext } from '../../context/AppContext';
import Quiz from 'react-quiz-component';
import { quiz } from '../Quiz/Quiz';
import TermsComponent from '../TermsComponent/TermsComponent.js';
import GFEBS from '../../img/GFEBS.png';
import { Image } from 'react-bootstrap';
import Standards from '../../img/standards.jpg';
import ReportingStandards from '../../img/reporting_standards.jpg';
import GFRS from '../../img/gfrs.jpg';
import FlowChart from '../../img/flowchart.png';
import LearningCheckPoint from '../../img/module_checkpoint.png';
import FMCrest from '../../img/fm_crest.png';

function Slides() {
  // State management
  const slideRef = useRef();
  const context = useContext(AppContext);

  const [key, setKey] = useState();

  // Calculates and sets progress bar percentage after every slide change
  useEffect(() => {
    context.toggleProgress();

    // Removes back arrow on first slide
    if (context.currentSlide === 1) {
      document.querySelector(
        '#root > div > div.mx-auto.my-auto > div > div > div.undefined.nav'
      ).style.display = 'none';
    } else {
      document.querySelector(
        '#root > div > div.mx-auto.my-auto > div > div > div.undefined.nav'
      ).style.display = 'block';
    }

    // Removes next arrow on final slide
    if (context.currentSlide === context.total) {
      document.querySelector(
        '#root > div > div.mx-auto.my-auto > div > div > div.next-arrow.nav'
      ).style.display = 'none';
    } else {
      document.querySelector(
        '#root > div > div.mx-auto.my-auto > div > div > div.next-arrow.nav'
      ).style.display = 'block';
    }
  }, [context]);

  // On page load, this populates the index dropdown and hides back arrow on page one to
  useEffect(() => {
    context.compileIndex();
  }, []);

  // Changes slide to specific index from dropdown menu
  useEffect(() => {
    slideRef.current.goTo(parseInt(context.currentSlide, 10));
  }, [context.currentSlide]);

  // Resets Quiz key to random number and rerenders it... there's probably a better way to do this.
  function retakeQuiz() {
    return setKey(Math.random());
  }

  // React-Slideshow package settings
  const properties = {
    indicators: false,
    arrows: true,
    autoplay: false,
    defaultIndex: 0,
    transitionDuration: 300,
    canSwipe: false,
    prevArrow: (
      <div style={{ width: '30px', marginRight: '-30px' }}>
        <i className='fas fa-arrow-left'></i>
      </div>
    ),
    nextArrow: (
      <div
        className='next-arrow'
        style={{ width: '30px', marginLeft: '-30px' }}
      >
        <i className='fas fa-arrow-right'></i>
      </div>
    ),
    onChange: (previous, next) => {
      context.onSlideChange(previous, next);
    },
  };

  // Sets post-quiz state
  const onCompleteAction = (obj) => {
    document.querySelector('.next-arrow').style.display = 'block';
    context.onQuizCompletion();
  };

  // Renders custom results page
  const renderCustomResultPage = (obj) => {
    return (
      <div>
        <h4>Well done, you may now continue with the lesson.</h4>
        <button onClick={retakeQuiz} className='btn btn-primary'>
          Retake
        </button>
      </div>
    );
  };

  return (
    <>
      <div
        className='mx-auto my-auto'
        style={{
          top: '300px',
          height: '500px',
          width: '900px',
          backgroundColor: '#f4f4f4',
        }}
      >
        <Slide ref={slideRef} easing='ease' {...properties}>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <h3 className='slide-title'>
                  Welcome to GFEBS and External Reporting Systems
                </h3>
                <p>
                  Welcome to GFEBS and External Reporting Systems module. In
                  this module, we will discuss:
                </p>

                <ul>
                  <li>Key Terms</li>
                  <li>Overview</li>
                  <li>Standardize Reporting</li>
                  <li>Department of Defense (DoD) Reporting Standards</li>
                  <li>Department of the Treasury Reporting Standards</li>
                  <li>
                    Summary of External Reporting Data Flows Module Checkpoint
                  </li>
                </ul>
              </div>
              <div className='col'>
                <span>
                  <Image fluid className='mt-5 py-5' src={GFEBS} alt='' />
                </span>
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>Lesson Objectives</h3>
                  <p>After completing this lesson, you will be able to:</p>
                  <ul>
                    <li>Define SFIS.</li>
                    <li>Explain the purpose of SFIS.</li>

                    <li>Describe how GFEBS achieves SFIS compliance.</li>
                    <li>Define DDRS.</li>
                    <li>Explain why GFEBS must use DDRS.</li>

                    <li>Define BEIS.</li>
                    <li>
                      Explain the relationship between BEIS, DDRS, and GFEBS.
                    </li>
                    <li>Define FACTS.</li>
                    <li>Explain the importance of FACTS I and II to GFEBS.</li>
                    <li>Define the GFRS.</li>
                    <li>
                      Explain the purpose of GFRS and how it is associated with
                      GFEBS.
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col'>
                <Image fluid className='mt-5 py-5' src={GFEBS} alt='' />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>Key Terms</h3>
                </div>
                <TermsComponent />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>Overview</h3>
                  <p>
                    Congress, Treasury, and DoD all have reporting requirements
                    and standards to which GFEBS must comply.
                  </p>
                  <p>This lesson will discuss:</p>
                  <ul>
                    <li>
                      Reporting standards imposed by DoD, the Treasury, and
                      Congress
                    </li>
                    <li>How GFEBS meets those standards</li>
                    <li>
                      External systems that require specific report formatting
                      to enable GFEBS to transport data automatically
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col'>
                <Image fluid className='mt-5 py-5' src={GFEBS} alt='' />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>Standardize Reporting</h3>
                  <p>
                    Standardizing reporting practices throughout DoD and
                    Treasury has several benefits. The following benefits
                    support transparency and affords organization.
                  </p>
                  <ul>
                    <li>
                      Enables decision-makers to efficiently compare similar
                      programs and activities throughout DoD.
                    </li>
                    <li>
                      Provides decision-makers the level of detail they require
                      to retrieve information and perform audits.
                    </li>
                    <li>
                      Improves the efficiency of maintaining business systems,
                      which reduces the costly maintenance and translation of
                      nonstandard data.
                    </li>
                    <li>
                      Links program management to its budgetary resources and
                      its actual financial information, which consequently
                      improves performance.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>
                    Department of Defense (DoD) Reporting Standards
                  </h3>
                  <p>
                    <b>Standard Financial Information Structure (SFIS)</b>
                    <br />
                    Standard Financial Information Structure (SFIS) is a
                    standard for categorizing financial information to support
                    financial management and reporting functions. It provides a
                    common foundation to track, process, and report DoD business
                    transactions. It also plays a key role in helping achieve
                    and sustain an unqualified audit opinion on consolidated DoD
                    financial statements. SFIS supports requirements for
                    budgeting, performance-based management, and the generation
                    of financial statements.
                  </p>
                </div>
              </div>
              <div className='col'>
                <Image fluid className='mt-5 py-5' src={GFEBS} alt='' />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>SFIS Standards (1 of 2)</h3>
                  <p>
                    <b>Who maintains the SFIS standards?</b>
                  </p>
                  <p>
                    BEIS is the organization established by DoD responsible for
                    maintaining SFIS and running the DDRS.
                  </p>
                  <p>BEIS performs the following specific functions:</p>
                  <ul>
                    <li>
                      Collects financial transactions from throughout DoD,
                      through DDRS.
                    </li>
                    <li>Provides the authoritative source for SFIS values.</li>
                    <li>Ensures that data is compliant with SFIS standards.</li>
                    <li>
                      Provides security-defined, enterprise-level access to
                      information for ad-hoc management queries.
                    </li>
                    <li>
                      Produces external financial management reports/statements
                      based on standardized data.
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col'>
                <Image fluid className='mt-5 py-5' src={GFEBS} alt='' />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>SFIS Standards (2 of 2)</h3>

                  <p>
                    At the end of each period, GFEBS sends its Trial Balance to
                    the DDRS, which requires GFEBS to format its Trial Balance
                    according to SFIS standards.
                  </p>
                  <ul>
                    <li>
                      The GFEBS Trial Balance includes the Defense Reporting
                      Elements (DRE), a subset of SFIS.
                    </li>
                    <li>
                      Each point account in GFEBS links to the appropriate SFIS
                      attribute and to the DoD reporting Chart of Accounts
                      number.
                    </li>
                    <li>
                      DDRS uses the GFEBS Trial Balance to produce all budget
                      and execution reports and financial statements for the
                      Army:
                    </li>
                    <ul>
                      <li>DDRS-B produces budgetary reports</li>
                      <li>DDRS-AFS produces financial statements</li>
                    </ul>
                    <li>
                      DDRS consolidates this with the trial balances from all
                      other DoD organizations to produce a unified DoD Trial
                      Balance for Congress, the Treasury, and the public.
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col'>
                <Image
                  fluid
                  className=' py-5'
                  src={Standards}
                  alt='Standards'
                />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col-7'>
                <div>
                  <h3 className='slide-title'>
                    Department of the Treasury Reporting Standards
                  </h3>
                  <p>
                    The Federal Agencies' Centralized Trial Balance System
                    (FACTS) is administered and maintained by the Department of
                    the Treasury's Financial Management Service (FMS) to prepare
                    the Financial Report of the United States Government at
                    year-end. FACTS I collects proprietary USSGL account balance
                    information at the end of each fiscal year.
                  </p>
                  <p>
                    FACTS II is also administered by Treasury FMS. It collects
                    budget execution data at the end of each fiscal quarter.
                    FACTS I and FACTS II exist simultaneously and run
                    independently of each other.
                  </p>
                  <p>
                    To enable DoD to compile a Trial Balance that meets Treasury
                    Standards, the Trial Balance that GFEBS sends to DDRS
                    complies with FACTS I and II reporting standards. To achieve
                    this, GFEBS maintains an association between its Chart of
                    Accounts and the attribute values used by FACTS I and FACTS
                    II.
                  </p>
                </div>
              </div>
              <div className='col'>
                <Image
                  fluid
                  className='mt-5 py-5'
                  src={ReportingStandards}
                  alt='Reporting Standards'
                />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>GFRS</h3>
                  <p>
                    <b>Government-Wide Financial Reporting System (GFRS)</b>
                  </p>
                  <p>
                    GFEBS also maintains an association between its Chart of
                    Accounts and attribute values used by GFRS. GFRS is
                    maintained by Treasury.
                  </p>
                  <p>
                    It captures each Federal agency's closing information and
                    links the agencies' audited and consolidated
                    department-level financial statements to the Financial
                    Report of the United States Government. GFRS resolves any
                    deficiencies identified by the Government Accountability
                    Office (GAO). Although DoD sends the consolidated financial
                    statement to GFRS, GFEBS formats its Trial Balance according
                    to GFRS so that DoD does not need to restructure data to
                    make it GFRS-compatible.
                  </p>
                </div>
              </div>
              <div className='col'>
                <Image fluid className='p-5' src={GFRS} alt='GFRS' />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>External Data Flows (1 of 2)</h3>
                  <p>
                    <b>External Reporting Data Flows</b>
                  </p>
                  <p>
                    <b>GFEBS</b>
                    <br />
                    GFEBS starts with consolidated financial data for the
                    previous fiscal period, as posted to the G/L.
                  </p>
                  <p>
                    <b>GFEBS</b>
                    <br />
                    FI runs the DDRS Trial Balance and sends it to the DDRS. The
                    Trial Balance Data Structure complies with SFIS, FACTS I,
                    FACTS II, and GFRS reporting requirements.
                  </p>
                  <p>
                    <b>DDRS</b>
                    <br />
                    DDRS, a system managed by DoD's BEIS produces the financial
                    statements for the Army. DDRS then consolidates all DoD
                    financial statements and produces the official DoD Financial
                    Statement.
                  </p>
                </div>
              </div>
              <div className=''>
                {' '}
                <Image
                  fluid
                  className='mt-3 my-auto col-7'
                  src={FlowChart}
                  alt='Flow Chart'
                />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col-7'>
                <div>
                  <h3 className='slide-title'>External Data Flows (2 of 2)</h3>
                  <p>
                    <b>External Reporting Data Flows</b>
                  </p>
                  <p>
                    <b>US Treasury</b>
                    <br />
                    The U.S. Treasury uses FACTS I, FACTS II, and GFRS to
                    produce the Financial Report for the United States
                    Government.
                  </p>
                  <p>
                    <b>Office of Management and Budget (OMB)</b>
                    <br />
                    The OMB receives the DoD Financial Statement, which helps it
                    hold the DoD accountable for its financial activities.
                  </p>
                  <p>
                    <b>
                      U.S. Congress | Government Accountability Office (GAO) |
                      American Public
                    </b>
                    <br />
                    The financial statements from the DoD and other Federal
                    agencies, the U.S. Treasury's Financial Report, and reports
                    from the OMB are provided to the U.S. Congress, the GAO, and
                    to the public. The availability and visibility of financial
                    activities promotes more fiscal responsibility within each
                    Federal agency.
                  </p>
                </div>
              </div>
              <div className='my-auto col'>
                {' '}
                <br />
                <Image fluid className='' src={FlowChart} alt='Flow Chart' />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>Learning Checkpoint</h3>
                  <p>
                    The following exercise consists of 6 questions to test your
                    comprehension of the previous information presented.
                  </p>
                </div>
              </div>
              <div className='col'>
                <Image
                  className='m-3'
                  fluid
                  src={LearningCheckPoint}
                  alt='Learning Checkpoint'
                />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <Quiz
                  quiz={quiz}
                  key={key}
                  continueTillCorrect={true}
                  showDefaultResult={false}
                  onComplete={onCompleteAction}
                  customResultPage={renderCustomResultPage}
                />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>Summary</h3>
                  <p>In this module you have learned to:</p>

                  <ul>
                    <li>Define SFIS and explain its purpose.</li>
                    <li>Describe how GFEBS achieves SFIS compliance.</li>
                    <li>Define DDRS and explain why GFEBS must use it.</li>
                    <li>
                      Define BEIS and explain its relationship to DDRS and
                      GFEBS.
                    </li>
                    <li>
                      Explain the importance of FACTS I and FACT II to GFEBS.
                    </li>
                    <li>
                      Define GFRS, explain its purpose, and how it is associated
                      with GFEBS.
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col'>
                {' '}
                <Image className='p-5' fluid src={FMCrest} alt='FM Crest' />
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
}

export default Slides;
