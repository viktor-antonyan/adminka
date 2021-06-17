import {useEffect, useRef, useState} from "react";
import {showOrgMenu} from "../../../redux/reducers/organizationReducer";
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {getFinishDashboard} from "../../../redux/thunk/thunkCreator";
import {useGoogleMaps} from "react-hook-google-maps";
import line from '../../../img/Line 73.png';




const Dashboard = React.memo(function Dashboard(props) {

        const prevMarkersRef = useRef([]);
        const [directions, setDirections] = useState('');


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

    const  point =  {lat: 34, lng: -100};

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


    useEffect(() => {
        dispatch(showOrgMenu(false))
    }, [])
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getFinishDashboard())
        dispatch(showOrgMenu(false))
    },[])

    const {finish, filterfinish} = useSelector(({finishDashboardReducer}) => finishDashboardReducer)
    const [activeItem, setActiveItem] = useState(null)
    const [data, setData] = useState([])
    return (
        <>
        <div className={'createBlock'}>
            <div className="quantity">
                <p>Дата</p>
                <input type="text"
                       placeholder='ДД/ММ/ГГГГ'
                       className='dd'
                />
                <button className='dis'>День</button>
                <button className='dis'>Два дня</button>
                <button className='dis'>Неделя</button>
                <button className='dis'>Месяц</button>
            </div>
            <div className="quantity">
                <p>Наименование отчетов</p>
                <select name="" id="" className='mixInput' disabled={true} style={{width:'600px'}}>
                    <option value="" disabled selected
                            hidden>Выбрать
                    </option>
                    <option value="Администратор кластера организации">
                        5
                    </option>
                    <option value="Администратор организации">6</option>
                </select>
            </div>
            <button className='dos' style={{margin:'5% 0 3% 64%'}}>Добавить</button>
        </div>
            <p className='closeP'>Закрыть x</p>
    <div className='treBlocks'>
        <div className="first">
            <p>Задания за май</p>
            <hr/>
            <div className="twice">
                <span className={"twiceP"}>1345</span>
                <span>заданий</span>
            </div>
        </div>
        <div className="first">
            <p>Задания за июнь</p>
            <hr/>
            <div className="twice">
                <span className={"twiceP"}>2235</span>
                <span>заданий</span>
            </div>
        </div>
        <div className="first">
            <p>Задания за июль</p>
            <hr/>
            <div className="twice">
                <span className={"twiceP"}>1009</span>
                <span>заданий</span>
            </div>
        </div>
    </div>
            <p className='closeP'>Закрыть x</p>
            <div className="table-users" style={{background:'white', width:"90%",margin:'30px auto',borderRadius:'20px'}}>
                <div className="table-users_head grid-row-5" style={{padding: "10px 69px 15px"}}>
                    <p>№</p>
                    <p>Название 1</p>
                    <p>Название 2</p>
                    <p>Название 3</p>
                    <p>Название 4</p>
                    <div className="table-line" style={{width:'90%'}}></div>
                </div>
                <div className="table-users_body">
                    {filterfinish && filterfinish.map(i => (
                        <div
                            className={`table-users_body-item grid-row-5 ${activeItem === i.id ? 'active-item-table' : ''}`}
                            key={_.uniqueId()} onClick={() => setActiveItem(i.id)} style={{padding: "0px 66px"}}>
                            <p>{i.no}</p>
                            <p>{i.name1}</p>
                            <p>{i.name2}</p>
                            <p>{i.name3}</p>
                            <p>{i.name4}</p>
                            <div className="table-line"></div>
                        </div>
                    ))}
                </div>
            </div>
            <p className='closeP'>Закрыть x</p>
            <div className="map" style={{marginTop:'30px'}}>
                    <div className="dashboard-content_tabs-content">
                        <div className="organization-page">
                            <div className="actions-panel" style={{display: "flex", flexDirection: "column"}}>
                                <div>
                                    <div ref={ref} style={{width: 1050, height: 600, borderRadius:"15px"}}/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <p className='closeP'>Закрыть x</p>
            <div className="map" style={{marginTop:'30px'}}>
                <div className="five">
                    <div className="light"></div>
                    <div className="red"></div>
                    <div className="green"></div>
                    <div className="yellow"></div>
                    <div className="blue"></div>
                </div>
                <img src={line} alt="line"/>
                    <div className="texts">
                        <p>Дворовая территория</p>
                        <p>Уборка мусора</p>
                        <p style={{marginRight: "-82px"}}>В работе</p>
                        <p>Задание не выполнено</p>
                        <p style={{paddingLeft: "55px"}}>Уборка</p>
                    </div>
            </div>
            </>
    );
}
)

export default Dashboard;
