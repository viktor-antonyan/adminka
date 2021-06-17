import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {showOrgMenu} from "../../../../redux/reducers/organizationReducer";
import {useGoogleMaps} from "react-hook-google-maps";

export const Map = React.memo(function Map() {
        const [position, setPosition] = useState({});
        const [error, setError] = useState(null);
        const [inputValue, setInputValue] = useState('');
        const changeInputValue = (e) => {
            setInputValue(e.target.value)
        }
        const onChange = ({coords}) => {
            setPosition({
                latitude: coords.latitude,
                longitude: coords.longitude,
            });
        };
        const onError = (error) => {
            setError(error.message);
        };
        const [value, setValue] = useState(0);
        const {ref, map, google} = useGoogleMaps(
            "AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk",
            {
                center: {lat: 0, lng: 0},
                zoom: 3,
            },
        );
        console.log("render Map");

        useEffect(() => {
            const geo = navigator.geolocation;
            if (!geo) {
                setError('Geolocation is not supported');
                return;
            }
            const watcher = geo.watchPosition(onChange, onError);
            return () => geo.clearWatch(watcher);
        }, []);

        const changeForm = (e) => {
             e.preventDefault()
            alert('hello')
        }

        useEffect(() => {
            if (!map) {
                return;
            }
            setValue(map.getZoom());

            const listener = map.addListener("zoom_changed", () => {
                setValue(map.getZoom());
            });
            return () => google.maps.event.removeListener(listener);
        }, [map, google]);


        const dispatch = useDispatch()

        useEffect(() => {
            dispatch(showOrgMenu(false))
        }, [])
        return (
            <div className="dashboard-content_tabs">
                <div className="dashboard-content_tabs-content">
                    <div className="organization-page">
                        <div className="actions-panel" style={{display: "flex", flexDirection: "column"}}>
                            <form onSubmit={changeForm}><input placeholder="Поиск" className="input" value={inputValue}
                                         style={{position: "absolute", left: "22%"}}
                                         onChange={changeInputValue}
                            /></form>

                            <div style={{padding: "60px 0"}}>
                                <div ref={ref} style={{width: 1150, height: 700}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
)
