import React from 'react';
import CommentsIndexContainer from '../comments/comments_index_container';
import { AiFillCaretLeft } from 'react-icons/ai';
import { AiFillCaretRight } from 'react-icons/ai';
import LikeIndexContainer from '../like/like_index_container';


class RouteslogShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarDisplay: ''
        };

        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer();

        let waypts = JSON.parse(this.props.route.waypoints);
        if (waypts.length > 0) {
            this.calculateAndDisplayRoute(this.directionsService, this.directionsRenderer);
            this.directionsRenderer.setMap(this.map);
        }
    }
    
    componentDidMount(){
        const mapOptions = {
            center: { lat: 37.79916, lng: -122.40132 },
            zoom: 17,
            title: 'Hello World',
            clickableIcons: false

        };

        if (!this.props.route) {
            this.props.fetchRoutelog(this.props.match.params.id);
        }

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.directionsRenderer.setMap(this.map);

    }

    calculateAndDisplayRoute(directionsService, directionsRenderer) {
        let waypts = JSON.parse(this.props.route.waypoints);
        const origin = `${waypts[0].location.lat}, ${waypts[0].location.lng}`
        const destination = `${waypts[waypts.length - 1].location.lat}, ${waypts[waypts.length - 1].location.lng}`;
        directionsService.route(
            {
                origin: origin,
                destination: destination,
                waypoints: waypts,
                optimizeWaypoints: false,
                travelMode: google.maps.TravelMode.WALKING,
            },
            (response, status) => {
                if (status === "OK" && response) {
                    directionsRenderer.setDirections(response);
                }
            }
        );
    }

    closeForm() {
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
            <div className='map-container'>
                <div>
                    <div id='map-form' >
                        <label className='route-show-header'>Title
                            <br />
                            <span className='route-show-span'>{this.props.route.route_title}</span>
                        </label>
                        <label className='route-show-header'>Description
                            <br />
                            <span className='route-show-span'>{this.props.route.description}</span>
                        </label>
                        <label id='directions-panel' className='route-show-header'>Distance </label>
                        <span className='route-show-span'>{this.props.route.distance}</span>
                    <LikeIndexContainer routeId={this.props.route.id} />
                    <CommentsIndexContainer routeId={this.props.route.id} />

                    </div>
                </div>
                <div className='the-map-div'>
                    <div className='side-bar-button' onClick={() => this.closeForm()}>{this.state.sidebarDisplay === true ? <AiFillCaretLeft /> : <AiFillCaretRight />}</div>
                    <div id='map' ref={map => this.mapNode = map}></div>
                </div>
            </div>
        );
    }
}

export default RouteslogShow