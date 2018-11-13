import React from 'react';
import GetInspired from '../GetInspired';
import { Link } from 'react-router-dom';
import './navbar.css';
import Tips from '../Tips';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    showPoems = () => {
        return (
            <GetInspired />
        )
    }
    showTips = () => {
        return (
            <Tips />
        )
    }

    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand id="poetry"href="/">Art of Poetry</NavbarBrand>>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link id="tips"to="/tips">Some Tips</Link>
                                <Link id="poems"to="/getinspired">Get Inspired</Link>
                                <Button id="btn"onClick={() => this.props.clickLogout()}>Logout</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}

export default NavBar;