import React from 'react';
import { Link } from 'react-router-dom';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import { AppBar, Drawer, MenuItem } from 'material-ui';


class AppShell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    handleDrawerToggle = open => {
        this.setState({open: !this.state.open})
    }
    handleRequestChange = open => {
        this.setState({open: open})
    }
    handleLinkClick = () => this.setState({
        open: false
    })
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar onClick={this.handleDrawerToggle}/>
                    <Drawer open={this.state.open} docked={false}
                     onRequestChange={this.handleRequestChange}>
                        <MenuItem
                            primaryText={'Home'}
                            containerElement={
                                <Link to={'./'}/>
                            }
                            onClick={this.handleLinkClick}
                        />
                        <MenuItem
                            primaryText={'Users'}
                            containerElement={
                                <Link to={'./users'}/>
                            }
                            onClick={this.handleLinkClick}
                        />
                        <MenuItem
                            primaryText={'Notification'}
                            containerElement={
                                <Link to={'./notification'}/>
                            }
                            onClick={this.handleLinkClick}
                        />
                    </Drawer>
                    <div id="content">
                        {React.cloneElement(this.props.children)}
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default AppShell;