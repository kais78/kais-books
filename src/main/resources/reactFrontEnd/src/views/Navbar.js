import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from "reactstrap";

const TopNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar   className='navco'light expand="md">
        <NavbarBrand href="/">MAIN LISTA</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        
            <Nav className="mr-auto" navbar >
              <NavItem>
                <NavLink href="./new">ADD BOOK</NavLink>
              </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
  );
};

export default TopNavbar;
