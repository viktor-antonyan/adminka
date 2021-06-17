import React, {useEffect, useState} from 'react';
import {Link, Route, Switch} from "react-router-dom";
import plus from "../../../img/plus.svg";
import filterIcon from "../../../img/filter-icon.svg";
import Loader from "../../Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {getJournal} from "../../../redux/thunk/thunkCreator";
import vector from "../../../img/pen.png"
import deleteVector from "../../../img/deleteVector.png"
import {Turned} from "./Turned";
import CreateJournalForm from "./CreateJournalForm";
import {Deployed} from "./Deployed";
import {showOrgMenu} from "../../../redux/reducers/organizationReducer";
import {useHistory} from "react-router-dom";
import FilterJournalForm from "./FilterJournalForm";
import {CheckitRow} from "./CheckitRow";
import JournalPagination from "./Pagination";
import {isCheckidAction} from "../../../redux/reducers/dashboardReducer";

export const ElectronicJournal = () => {
    const {isLoading} = useSelector(({dashboardReducer}) => dashboardReducer)
    const {show} = useSelector(({electronicJournalReducer}) => electronicJournalReducer)
    const {journal, filterJournal} = useSelector(({electronicJournalReducer}) => electronicJournalReducer)
    const [checked, setChecked] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [showFilter, setShowFilter] = useState(false)
    const [showCheckid, setShowCheckid] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        dispatch(showOrgMenu(false))
    }, [])
    const clickCreate = () => {
        history.push('/Электронный-журнал')
        if (history.location.pathname === '/Электронный-журнал') {
            setShowForm(true)
        }
    }
    const clickFilter = () => {
        setShowFilter(!showFilter)
        setShowCheckid(false)
    }
    const clickBurger = () => {
        setShowCheckid(!showCheckid)
        setShowFilter(false)
    }
    const checkidHandler =() => {
        setChecked(!checked)
        dispatch(isCheckidAction(checked))
    }
    return (
        <div className="table">
            <div style={{background: 'white',borderRadius: '20px'}}>
                {!showForm ? <>
                    <div className={"dashboard-content_tabs-content"}>
                        <div className="actions-panel">
                            <form className={"journalForm"}>
                                <input placeholder="Поиск" className="input"/>
                                <div className={"verticalBurger"} onClick={clickBurger}>
                                    <i className="fa fa-bars fa-rotate-90"></i>
                                </div>
                                <div className="filter-button" style={{marginLeft: "20px", cursor: "pointer"}}
                                     onClick={clickFilter}><img
                                    src={filterIcon}
                                    alt="filterIcon"/>
                                    <p>Фильтры</p></div>
                                <input className="switch" type="checkbox" onClick={checkidHandler}
                                       checked={checked ? true : false} style={{marginLeft: "120px"}}/>
                                <p style={{margin: "5px 20px", color: "#323432"}}>Свернутый режим</p>
                            </form>
                            <div className="actions-panel_button">
                                <Link to={`/Создать/задание`} onClick={clickCreate}>
                                    <button className="button submit undefined" onClick={clickCreate}><img
                                        src={plus}
                                        alt="plus"/>Создать
                                    </button>
                                </Link>
                                <div style={{
                                    width: "40px",
                                    height: "30px",
                                    border: '1px solid #058ED9',
                                    borderRadius: "8px",
                                    marginRight: "18px"
                                }}>
                                    <img src={vector} alt="vector" className={'img'}
                                         style={{marginTop: "5px", marginLeft: "12px"}}/>
                                </div>
                                <div style={{
                                    width: "40px",
                                    height: "30px",
                                    border: '1px solid #E85F5C',
                                    borderRadius: "8px",
                                    marginRight: "18px"
                                }}>
                                    <img src={deleteVector} alt="vector"
                                         style={{marginTop: "5px", marginLeft: "12px"}}/>
                                </div>
                                <button className="button white green-outline">Экспорт</button>
                            </div>
                        </div>
                    </div>
                        {isLoading ? <Loader/> :
                            checked ? <Turned/> : <Deployed/>
                        }
                        {showFilter && <FilterJournalForm/>}
                        {showCheckid && <CheckitRow/>}
                    </> :
                    <Route path="/Создать/задание"><CreateJournalForm/></Route>
                }
            </div>
        </div>
    )
}
