// All project images will need to be imported into here
import './Portfolio.css';
import Project from '../../components/Project/Project';
import Blog from '../../assets/Image/Projects/Blog.png';
import Employee from '../../assets/Image/Projects/Employee.png';
import Logo from '../../assets/Image/Projects/Logo.png';
import Social from '../../assets/Image/Projects/Social.png';
import Task from '../../assets/Image/Projects/Task.png';
import Text from '../../assets/Image/Projects/Text.png/';


const Portfolio = () => {
  return (
    <div>
        <div>
            <p>
                <h3 className='projecttext'>
                    Here are a list of my projects I am most proud of. Take a look at them! 
                </h3>
            </p>
        </div>
        <div id="projects" className="album py-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                        <Project image={Blog} description="Personal Blog to add entries and keep past entries" href="https://github.com/MommaDLP/Transformation-Station"/>
                    </div>
                    <div className="col">
                        <Project image={Employee} description="Employee payroll tracker, with first name, last name and salary" href="https://github.com/MommaDLP/Roster-Time"/>
                    </div>
                    <div className="col">
                        <Project image={Logo} description="Logo generator with three shape options and a three letter text detail" href="https://github.com/MommaDLP/LogoSVG"/>
                    </div>
                    <div className="col">
                        <Project image={Social} description="API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list." href="https://github.com/MommaDLP/Social-Network-API"/>
                    </div>
                    <div className="col">
                        <Project image={Task} description="Add information to Task Title, Task due Date and Task Description" href="https://github.com/MommaDLP/Multi-Visions"/>
                    </div>
                    <div className="col">
                        <Project image={Text} description="A text editor that runs in the browser,this app will be a single-page application that meets the PWA criteria." href="https://github.com/MommaDLP/Text-Editor"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Portfolio;
