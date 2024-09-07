import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Map = ({ id }) => {
    const [myLat, setMyLat] = useState(0);
    const [myLong, setMyLong] = useState(0);
    useEffect(() => {

        async function getLocation() {
            // const toastId = toast.loading('Tracking cattle # ' + id + ' on map...');
            const result = await fetch(import.meta.env.VITE_HOST_ADDRESS + '/cattle/track')
                .then(d => {
                    const result = d.json()
                        .then(data => {

                            let out = data[data.length - 1];
                            setMyLat(out.latitude);
                            setMyLong(out.longitude);
                        })
                })

        }

        setTimeout(getLocation, 10000)
    }, [])

    function getMyLocation() {
        const toastId = toast.loading('Tracking location on map...');

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    toast.success('Successfully tracked.', {
                        id: toastId
                    });
                    // what to do once we have the position
                    setMyLat(position.coords.latitude)
                    setMyLong(position.coords.longitude)
                    // console.log(position.coords.latitude);
                    // console.log(position.coords.longitude);
                },
                (error) => {
                    // display an error if we cant get the users position
                    toast.error('Geolocating error.', {
                        id: toastId
                    });
                    console.error('Error getting location:', error);
                }
            );
        }
        else {
            // display an error if not supported
            toast.error('Geolocation is not supported by this browser.', {
                id: toastId
            });
            console.error('Geolocation is not supported by this browser.');
        }
    }

    getMyLocation()

    const position = [myLat, myLong]
    return (
        <>
            <Toaster />
            {myLong != 0 ?
                <div className='w-full h-full p-5 overflow-hidden' style={{ zIndex: '1' }}> <MapContainer center={position} zoom={15} scrollWheelZoom={true}> <TileLayer attribution='Briefcase Tracker' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> <Marker position={position}> <Popup> Cattle located here. </Popup> </Marker> </MapContainer> </div>

                :

                <p>Loading map</p>

            }

        </>
    )
}

export default Map
