import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Contact() {
    return ( 
        <div>
            <div className="d-flex justify-content-end">
            <div className='btn btn-outline-info me-2'><Link to="/dashboard" >Dashboard</Link></div>
            <div className='btn btn-outline-info me-2'><Link to="/about">About Us</Link></div>
            <div className='btn btn-outline-info me-2'><Link to="/contact">Contact Us</Link></div>
            <div className='btn btn-outline-danger me-3'><Link to="/">Sign Out</Link></div>
        </div>
            <h1>Contact Us Here!</h1>

            <h3>Get In Touch : Shriyashthakare671@gmail.com</h3>
            <h3>Phone: 7887710549</h3>
            <h3>Address: Hinjewadi Phase 2, Pune.</h3>
        </div>
        );
}

export default Contact;