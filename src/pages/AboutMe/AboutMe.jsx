import './AboutMe.css';
// import Profile-image from '../../assets/Image/Me/Profile-image.jpeg';

const AboutMe = () => {
  return (
    <div>
        <div id='aboutme-container' className='container- col-xxl-8 px-4 py-5'>
            <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
                <div className='col-lg-6'>
                    <h1 id='abouttitle' className='display-5 fw-bold text-body-emphasis 1h-1 mb-3'>Hi there, I'm Miranda! Welcome to my Portfolio</h1>
                    <p id='aboutparagraph' className='aboutP'>Random information about myself and experience. Why I wanted to become a developer, goals aspirations etc.</p>
                </div>
                <div>
                    <img id='portfoliopic' src=""
                     className='d-block mx-lg-auto img-fluid' width='450' />
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutMe;