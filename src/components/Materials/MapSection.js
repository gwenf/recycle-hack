import React from 'react'
import { connect } from 'react-redux'
import { MapComponent } from '../MapComponent'
import * as LocationService from '../../services/locationService'
import * as MarkersService from '../../services/markersService'
import * as Store from '../../store/store'
import { initMap } from '../../actions/actions'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

class MapSection extends React.Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    componentWillMount() {
        LocationService.getCurrentLocation().then(function (location) {
            MarkersService.getMarkers().then(function (markers) {
                Store.dispatch(initMap(location, markers))
            })
        }).catch(() => {

        });
    }

    render() {
        return (
            <div style={{height: "100%"}}>
                <GoogleMapLoader
                    containerElement={
                        <div
                            style={{
                                height: "600px",
                            }}
                        />
                    }
                    googleMapElement={
                        <GoogleMap
                            ref={(map) => console.log(map)}
                            defaultZoom={13}
                            defaultCenter={{lat: this.props.latitude, lng: this.props.longitude}}
                            onClick={(event) => {
                                console.log(event)
                            }}>
                            {
                                this.props.markers.map((marker, index) => {
                                    return (
                                        <Marker
                                            position={new google.maps.LatLng(marker.latitude, marker.longitude)}
                                            onRightclick={(event) => console.log(event)}/>
                                    )
                                })
                            }
                        </GoogleMap>
                    }
                />
            </div>
        );
    }
}

var mapStateToProps = function (state, ownProps) {
    return {
        latitude: state.mapReducer.latitude,
        longitude: state.mapReducer.longitude,
        markers: state.mapReducer.markers
    };
};

MapSection = connect(state => (mapStateToProps), null)(MapSection);

export default MapSection