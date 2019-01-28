import * as React from "react";
import {Link} from "react-router-dom";
//import {Glyphicon, Nav, Navbar, NavItem} from "rsuite";
import "./NavMenu.css";
import {Dropdown, Icon, Sidenav} from "rsuite";

declare class NavMenuProp{

}

class NavMenu extends React.Component {

    constructor(prop : NavMenuProp){
        super(prop);
        this.state = {
            value : null
        }
    }

    render(): React.ReactNode {
        return (
            <Sidenav/>
        );
    }
}

export const NavToggle = () => {
    return (
        <Sidenav/>
        /*<Navbar appearance="subtle" className="nav-toggle">
            <Navbar.Body>
                <Nav>
                    <Dropdown
                        placement="topLeft"
                        trigger="click"
                        renderTitle={children => {
                            return <Icon style={iconStyles} icon="cog"/>;
                        }}
                    >
                        <Dropdown.Item>Help</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                </Nav>

                <Nav pullRight>
                    <Nav.Item onClick={onChange} style={{width: 56, textAlign: 'center'}}>
                        <Icon icon={expand ? 'angle-left' : 'angle-right'}/>
                    </Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>*/
    )
};