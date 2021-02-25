import React, { useRef, useState, useEffect, useContext } from 'react';
import { Slide } from 'react-slideshow-image';
import { AppContext } from '../../context/AppContext';
import Quiz from 'react-quiz-component';
import { quiz } from '../Quiz/Quiz';
import TermsComponent from '../TermsComponent/TermsComponent.js';

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
                <span>IMAGE</span>
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
              <div className='col'>IMAGE</div>
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
                  <h3 className='slide-title'>title</h3>
                  <p>text</p>
                </div>
              </div>
              <div className='col'>IMAGE</div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>title</h3>
                  <p>text</p>
                </div>
              </div>
              <div className='col'>IMAGE</div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>title</h3>
                  <p>text</p>
                </div>
              </div>
              <div className='col'>IMAGE</div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>title</h3>
                  <p>text</p>
                </div>
              </div>
              <div className='col'>IMAGE</div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>title</h3>
                  <p>text</p>
                </div>
              </div>
              <div className='col'>IMAGE</div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>title</h3>
                  <p>text</p>
                </div>
              </div>
              <div className='col'>IMAGE</div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>title</h3>
                  <p>text</p>
                </div>
              </div>
              <div className='col'>IMAGE</div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>title</h3>
                  <p>text</p>
                </div>
              </div>
              <div className='col'>IMAGE</div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>title</h3>
                  <p>text</p>
                </div>
              </div>
              <div className='col'>IMAGE</div>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
}

export default Slides;
