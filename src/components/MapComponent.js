import * as React from "react";
import {connect} from "react-redux";
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

class MapComponent extends React.Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
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
        )
    }
}
var mapStateToProps = function (state, ownProps) {
    return {};
};

MapComponent = connect(state => (mapStateToProps), null)(MapComponent);

export default MapComponent
