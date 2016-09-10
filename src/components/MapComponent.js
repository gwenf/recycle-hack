import React, { Component } from 'react'
import { connect } from 'react-redux'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";
import * as LocationService from "../services/locationService";

class MapComponent extends Component {
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
    }

    componentWillMount(){
        LocationService.getCurrentLocation().then(function(location){
            this.props.dispatch(updateCurrentLocationAction(location))
        })
    }

    render(){
        return (
            <siv style={{height: "100%"}}>
                <GoogleMapLoader
                    containerElement={
                        <div
                            {...props.containerElementProps}
                            style={{
                                height: "100%",
                            }}
                        />
                    }
                    googleMapElement={
                        <GoogleMap
                            ref={(map) => console.log(map)}
                            defaultZoom={3}
                            defaultCenter={{ lat: state.latitude, lng: state.longitude }}
                            onClick={props.onMapClick}
                        >
                            {props.markers.map((marker, index) => {
                                return (
                                    <Marker
                                        {...marker}
                                        onRightclick={() => props.onMarkerRightclick(index)} />
                                );
                            })}
                        </GoogleMap>
                    }
                />
            </siv>
        )
    }
}
var mapStateToProps = function(state, ownProps){
    return {
        latitude: state.locationReducer.latitude,
        longitude: state.locationReducer.longitude
    };
};

MapComponent = connect(state => (mapStateToProps), null)(MapComponent);

export default MapComponent
