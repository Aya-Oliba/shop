import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import './navbar.css'

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="align-items-baseline d-flex">
                <Navbar.Brand href="#home"><h2>Shop</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <ul className="list-unstyled d-flex">
                        <Link to="/home"><li className="me-4">home</li></Link>
                        <Link to="/counter"><li className="me-4">Counter</li></Link>
                        <Link to="/shop"><li>Shop</li></Link>
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
