import * as React from 'react';

class Sidebar extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="navbar-default sidebar" role="navigation">
            <div className="sidebar-nav navbar-collapse">
                <ul className="nav" id="side-menu">
                   
                    <li>
                        <a href="index.html"><i className="fa fa-dashboard fa-fw"></i> Dashboard</a>
                    </li>                   
                </ul>
            </div>
        </div>
        );
    }
}

export default Sidebar;