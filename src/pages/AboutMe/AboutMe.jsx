import './AboutMe.css';
import profileimage from '../../assets/Image/Me/Profile-image.jpeg'; // Corrected import

const AboutMe = () => {
  return (
    <div>
      <div id='aboutme-container' className='container col-xxl-8 px-4 py-5'>
        <div className='row align-items-start g-5 py-5'>
          <div className='col-lg-6'>
            <h1 id='abouttitle' className='display-5 fw-bold text-body-emphasis mb-3'>
              Miranda De La Paz
            </h1>
            <p id='aboutparagraph' className='aboutP'>
              Hello World! I'm Miranda De La Paz, a beginner web developer out of Texas.<br />
              As an artist, my first love will always be crafting the visual.<br />
              From creating an amazing home life with a family to lines of code on a webpage,<br />
              I love combining logic with creative design to make eye-catching websites and applications.<br />
              <br />
              I've just completed the UTSA bootcamp and was able to leverage my creative skills with incredible web development tools.<br />
              I've always been drawn to both the creative and analytical side of development,<br />
              so I'm thankful to be able to do both with the foundation I built during bootcamp.<br />
              I'm now able to truly call myself a Front-End Developer who is currently working to become stronger in Back-End development.<br />
              With that, technology leads, society follows, and I'm excited to make the leap to continue refining my skills with the right company.<br />
            </p>
          </div>
          <div className='image-container'> 
            <img id='portfoliopic' src={profileimage} // Use the imported variable
                 className='d-block img-fluid' width='450' alt="Profile" style={{ marginTop: '-20px' }}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
