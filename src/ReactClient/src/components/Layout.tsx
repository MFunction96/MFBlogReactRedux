import * as React from "react";
import {Grid, Sidenav, Toggle, Icon, Dropdown, Row, Col} from "rsuite";
import SideNav from "./SideNav";

declare class LayoutProps {

}

export class Layout extends React.Component {
	constructor(props : LayoutProps){
		super(props);
	}
    render() {
        return (
			<Grid fluid>
				<Row>
					<Col sm={3}>
						<SideNav />
					</Col>
					<Col sm={9}>
                        {this.props.children}
					</Col>
				</Row>
			</Grid>

        );
    }
}
