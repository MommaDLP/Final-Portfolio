// All project images will need to be imported into here
import Project from '../../components/Project/Project.jsx';


import './Portfolio.css';

const Portfolio = () => {
  return (
    <div>
        <div>
            <p>
                <h3 className='projecttext'>
                    Here are a list of my projects I'm most proud of. Take a look at them! 
                </h3>
            </p>
        </div>
        <div id="projects" className="album py-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                        <Project image="" description="Description" href=""/>
                    </div>
                    <div className="col">
                        <Project image="" description="Description" href=""/>
                    </div>
                    <div className="col">
                        <Project image="" description="Description" href=""/>
                    </div>
                    <div className="col">
                        <Project image="" description="Description" href=""/>
                    </div>
                    <div className="col">
                        <Project image="" description="Description" href=""/>
                    </div>
                    <div className="col">
                        <Project image="" description="Description" href=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Portfolio;
