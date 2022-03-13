import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import searchFood from "../../api-requests/searchs";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import translate from 'translate';

function NavBar({ handleResults }) {
    const [search, setSearch] = useState('');
    const clientLang = localStorage.getItem('lang') || 'es';

    const handleSearch = async (e) => {
        e.preventDefault();
        handleResults([{loading: 'Loading...'}])
        const translatedSearch = await translate(search, {from:clientLang, to:'en', engine:'google'})
        const response = await searchFood(translatedSearch);
        console.log(translatedSearch)
        handleResults(response)
    }

    return ( 
        <Navbar bg="success" expand="lg">
            <Container>
                <Navbar.Brand className="text-white" href="/">Fitness-r</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className="nav-link text-white" to="/">
                        Home
                    </Link>
                    <Link className="nav-link text-white" to="/your-food-list">
                        Your list
                    </Link>
                </Nav>
            <form onSubmit={handleSearch} className="form d-flex flex-row align-items-center ms-auto">
                <input type="text" className="form-control" onChange={(e) => setSearch(e.target.value)}/>
                <button className="btn btn-primary" type="submit">
                    <FontAwesomeIcon icon={faSearch}/>    
                </button>
            </form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;