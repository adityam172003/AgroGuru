import React from 'react'
import '../Styles/nursery_page_ui.css';
import {useJsApiLoader, GoogleMap} from '@react-google-maps/api'
// AIzaSyCewTLLVyh_laftQb64hfTN2sgE3YNlD5s 

const MAP_API = 'AIzaSyCLpM3eJinkUkVzemk-drMQk79xjEVVprA';

const center = {lat : 48.8584, lng: 2.2945}

const MapRoute = () => {

    const {isLoaded} = useJsApiLoader(MAP_API);

    if(!isLoaded){
        return(
            <div>
                <p>Loading ....</p>
            </div>
        )
    }

  return (
    <div>
        <div className='gmapbox'>
            <GoogleMap center={center} zoom={15} mapContainerStyle={{
                width: '40%',
                height: '30%',
            }}>
            </GoogleMap>
        </div>
    </div>
  )
}

export default MapRoute