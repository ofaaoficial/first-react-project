import React, {Component} from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <span className="badge badge-pill badge-light">Accountant {this.props.title}</span>
            </nav>
        )
    }
}

export default Navigation;