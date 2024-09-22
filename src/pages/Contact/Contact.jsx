import './Contact.css';

const Contact = () => {
  return (
    
    <div id='container'>
        <div id='form'>
            <div id='contactForm' className="form-floating mb-3">
                <input type="name" className="form-control" id="floatingInput" placeholder="Name?" />
                <label for="floatingInput">Name:</label>
            </div>
            <div id='contactForm' className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="textBox" placeholder="Send me a message!" />
                <label for="textBox">Send me a message!</label>
            </div>
            <div id='submitBtn'>
                <button id='btnSubmit' className="btn btn-primary w-100 py-2 align-items-center" type="submit">Submit</button>
            </div>
        </div>
    </div>
  );
};

export default Contact;