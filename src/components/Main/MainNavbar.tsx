import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.svg';
import Icons from '../../constants/Icons';
import Texts from '../../constants/Texts';

const MainNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="main-navbar">
      <Container className="main-container">
        <Navbar.Brand>
          <img alt="logo" src={Logo} width="150" height="30" className="d-inline-block align-top main-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              className="nav-link-text margin-right-10"
              renderMenuOnMount={true}
              title={<span className="nav-link-text">{Texts.movies}</span>}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/movies">
                {Texts.popular}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/movies/upcoming">
                {Texts.upcoming}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/movies/top-rated">
                {Texts.topRated}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-link-text margin-right-10">{Texts.tvShows}</Nav.Link>
            <Nav.Link className="nav-link-text margin-right-10">{Texts.people}</Nav.Link>
            <Nav.Link className="nav-link-text margin-right-10">{Texts.more}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="nav-link-text align-items margin-right-10">
              <i className="material-icons nav-link-plus">{Icons.plus}</i>
            </Nav.Link>
            <Nav.Link className="nav-link-text align-items margin-right-10">
              <div className="align-items language-box">
                <span>EN</span>
              </div>
            </Nav.Link>
            <Nav.Link className="nav-link-text align-items margin-right-10">{Texts.login}</Nav.Link>
            <Nav.Link className="nav-link-text align-items margin-right-10">{Texts.joinTmdb}</Nav.Link>
            <Nav.Link className="align-items">
              <i className="material-icons search-icon">{Icons.search}</i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
