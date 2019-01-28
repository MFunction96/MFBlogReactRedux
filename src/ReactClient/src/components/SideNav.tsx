import {Dropdown, Icon, Nav, Sidenav} from 'rsuite';
import * as React from "react";
import {any} from "prop-types";

declare class SideNavProp {

}

export default class SideNav extends React.Component {
    constructor(prop : SideNavProp) {
        super(prop);

        this.state = {
            expanded : true,
            activeKey: '1'
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleToggle() {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    handleSelect(eventKey  : string) {
        this.setState({
            activeKey: eventKey
        });
    }

    render() {
        const {expanded} = this.state;

        return (
            <div style={{width: 250}}>
                <Toggle onChange={this.handleToggle} checked={expanded}/>
                <hr/>
                <Sidenav
                    expanded={expanded}
                    defaultOpenKeys={['3', '4']}
                    activeKey={this.state.activeKey}
                    onSelect={this.handleSelect}
                >
                    <Sidenav.Body>
                        <Nav>
                            <Nav.Item eventKey="1" icon={<Icon icon="dashboard"/>}>
                                Dashboard
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<Icon icon="group"/>}>
                                User Group
                            </Nav.Item>
                            <Dropdown
                                placement="rightTop"
                                eventKey="3"
                                title="Advanced"
                                icon={<Icon icon="magic"/>}
                            >
                                <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
                                <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
                                <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
                                <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
                            </Dropdown>
                            <Dropdown
                                placement="rightTop"
                                eventKey="4"
                                title="Settings"
                                icon={<Icon icon="gear-circle"/>}
                            >
                                <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                                <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
                                <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
                                <Dropdown.Menu eventKey="4-5" title="Custom Action">
                                    <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
                                    <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </div>
        );
    }
}
