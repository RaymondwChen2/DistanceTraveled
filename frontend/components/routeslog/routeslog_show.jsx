import React from 'react';

class RouteslogShow extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount(){
        this.props.fetchRoutelog(this.props.match.params.id);
    }

    closeForm(e) {
        let formSidebar = document.getElementById("map-form");

        if (formSidebar.style.display === 'none') {
            this.setState({ sidebarDisplay: true });
            formSidebar.style.display = 'flex';
        } else {
            this.setState({ sidebarDisplay: false });
            formSidebar.style.display = 'none';

        }
    }
    render() {
        if (!this.props.route) {
            return null;
        }
        return (
            <div>
                {this.props.route.route_title}
                {this.props.route.description}
                {this.props.route.distance}
            </div>
        );
    }
}

export default RouteslogShow