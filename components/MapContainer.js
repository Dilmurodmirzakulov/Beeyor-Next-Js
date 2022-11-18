import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
function MapContainer() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
           
        </InfoWindow>
      </Map>
    )
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyA-HVlCZDcWOHAOlhBSSrS8MN3ByHdw-QM")
})(MapContainer)