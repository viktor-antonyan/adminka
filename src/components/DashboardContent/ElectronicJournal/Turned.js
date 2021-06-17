import _ from "lodash";
import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {resizeTable} from "../../../utils/resize";
import {getJournal} from "../../../redux/thunk/thunkCreator";
import JournalPagination from "./Pagination";

export const Turned = () => {
    const {journal, filterJournal} = useSelector(({electronicJournalReducer}) => electronicJournalReducer)
    const dispatch = useDispatch()

    const table = useRef()
    useEffect(() => {
        resizeTable(table.current);
        // dispatch(getJournal())
    }, [])
    return (
        <>
            <div style={{overflowX: 'scroll', height: '490px'}}>
                <table ref={table} style={{position: "absolute"}}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Дата создания</th>
                        <th>Объект обслуживания</th>
                        <th>Описание задания</th>
                        <th>Этапя</th>
                        <th>Вид рабоя</th>
                        <th>Приоритет</th>
                        <th>Организация-исполнител</th>
                        <th>Пользователь-исполнитель</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filterJournal && filterJournal.map(i => (
                        <tr key={_.uniqueId()} style={{whiteSpace: 'nowrap'}}>
                            <td><input type="checkbox" className={'checkbox'}/>{i.userId}</td>
                            <td>{i.birthDate}</td>
                            <td>{i.descriptionTask}</td>
                            <td>{i.objectWaitOn}</td>
                            <td>
                                <div style={{
                                    width: "10px", height: "10px", backgroundColor: i.step.color, borderRadius: "50%",
                                    display: "inline-flex", marginRight: "10px"
                                }}/>
                                {i.step.title}</td>
                            <td>{i.typeWork}</td>
                            <td>{i.priorytet}</td>
                            <td>{i.organizationAbler}</td>
                            <td>{i.userAbler}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className={"pag"}>
                <p className={"journalCount"}>Заданий: {journal.length}</p>
                <JournalPagination/>
            </div>
        </>
    )
}
